import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { MAP, PLACE_LABELS, PLACES } from '../../data/mapData';
import { MAP_PATHS } from '../../data/mapPaths';
import '../styleForGift/birthday.css'

const NICE_SCALES = [10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000];
const LABELS_COMPACT_AT = 520;

function makeTargetView(pin) {
  const width = MAP.width / 3;
  const height = MAP.height / 3;
  return {
    x: Math.min(Math.max(pin.x - width / 2, 0), MAP.width - width),
    y: Math.min(Math.max(pin.y - height / 2, 0), MAP.height - height),
    width,
    height,
  };
}

export default function EuropeMap({ activeId, selectionRevision, onSelect }) {
  const svgRef = useRef(null);
  const animationRef = useRef(0);
  const viewRef = useRef({ x: 0, y: 0, width: MAP.width, height: MAP.height });
  const initialView = useRef(true);
  const [view, setView] = useState(viewRef.current);
  const [pixelWidth, setPixelWidth] = useState(800);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const pinsById = useMemo(() => Object.fromEntries(MAP.pins.map((pin) => [pin.id, pin])), []);

  const updateView = useCallback((nextView) => {
    viewRef.current = nextView;
    setView(nextView);
  }, []);

  const animateTo = useCallback((target) => {
    cancelAnimationFrame(animationRef.current);
    if (prefersReducedMotion) {
      updateView(target);
      return;
    }

    const from = viewRef.current;
    const start = performance.now();
    const duration = 700;
    const fromCenter = [from.x + from.width / 2, from.y + from.height / 2];
    const toCenter = [target.x + target.width / 2, target.y + target.height / 2];

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      const width = from.width * Math.pow(target.width / from.width, eased);
      const height = width * MAP.height / MAP.width;
      const centerX = fromCenter[0] + (toCenter[0] - fromCenter[0]) * eased;
      const centerY = fromCenter[1] + (toCenter[1] - fromCenter[1]) * eased;
      updateView({ x: centerX - width / 2, y: centerY - height / 2, width, height });
      if (progress < 1) animationRef.current = requestAnimationFrame(frame);
    }

    animationRef.current = requestAnimationFrame(frame);
  }, [prefersReducedMotion, updateView]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(media.matches);
    updatePreference();
    media.addEventListener?.('change', updatePreference);
    return () => media.removeEventListener?.('change', updatePreference);
  }, []);

  useEffect(() => {
    const element = svgRef.current;
    if (!element) return undefined;
    const resize = () => setPixelWidth(element.getBoundingClientRect().width || MAP.width);
    resize();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const pin = pinsById[activeId];
    if (!pin) return;
    if (initialView.current) {
      initialView.current = false;
      return;
    }
    animateTo(makeTargetView(pin));
  }, [activeId, animateTo, pinsById, selectionRevision]);

  useEffect(() => () => cancelAnimationFrame(animationRef.current), []);

  const selectedPin = pinsById[activeId];
  const isZoomed = view.width < MAP.width - 0.5;
  const pinScale = view.width / pixelWidth;
  const compact = PLACES.length > 20 || (pixelWidth < LABELS_COMPACT_AT && view.width > MAP.width * 0.7);
  const kmPerPixel = MAP.kmPerUnit * pinScale;
  const scaleKm = NICE_SCALES.reduce((chosen, value) => (
    value / kmPerPixel <= 130 ? value : chosen
  ), NICE_SCALES[0]);
  const scaleWidth = scaleKm / kmPerPixel;

  function resetView() {
    animateTo({ x: 0, y: 0, width: MAP.width, height: MAP.height });
  }

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape' && viewRef.current.width < MAP.width - 0.5) resetView();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [animateTo]);

  return (
    <figure className="map-plate">
      <div className="map-frame">
        <svg
          ref={svgRef}
          className={`map${compact ? ' map-compact' : ''}`}
          viewBox={`${view.x.toFixed(2)} ${view.y.toFixed(2)} ${view.width.toFixed(2)} ${view.height.toFixed(2)}`}
          role="group"
          aria-label={`Карта Європи з ${PLACES.length} місцями`}
        >
          <g className="map-base">
            <defs>
              <path id="land-v" d={MAP_PATHS.landVisited} />
              <path id="land-o" d={MAP_PATHS.landOther} />
            </defs>
            <g>
              <use href="#land-o" className="lin a" />
              <use href="#land-v" className="lin a" />
              <use href="#land-o" className="lin b" />
              <use href="#land-v" className="lin b" />
              <use href="#land-o" className="lin c" />
              <use href="#land-v" className="lin c" />
            </g>
            <use href="#land-o" className="land o" />
            <use href="#land-v" className="land v" />
            <path className="grat" d={MAP_PATHS.graticule} />
          </g>
          {MAP.labels.map((label) => (
            <text
              key={label.text}
              className={`map-label ${label.kind}${label.size * pixelWidth / view.width < 7 ? ' map-label-tiny' : ''}`}
              x={label.x}
              y={label.y}
              fontSize={label.size}
              transform={`rotate(${label.rotation} ${label.x} ${label.y})`}
            >
              {label.text}
            </text>
          ))}
          {PLACES.map((place) => {
            const pin = pinsById[place.id];
            const [dx, dy, anchor] = PLACE_LABELS[place.label || 'r'];
            const isActive = activeId === place.id;
            return (
              <g
                key={place.id}
                className={`map-pin${isActive ? ' is-active' : ''}`}
                transform={`translate(${pin.x} ${pin.y})`}
                tabIndex="0"
                role="button"
                aria-pressed={isActive}
                aria-label={`${place.name}, ${place.country}`}
                onClick={() => onSelect(place.id)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelect(place.id);
                  }
                }}
              >
                <g transform={`scale(${pinScale.toFixed(4)})`}>
                  <circle className="pin-hit" r="20" />
                  <circle className="pin-pulse" r="14" />
                  <circle className="pin-ring" r="8.5" />
                  <circle className="pin-dot" r="5" />
                  <circle className="pin-spark" cx="-1.7" cy="-1.9" r="1.4" />
                  <text className="pin-name" x={dx} y={dy} textAnchor={anchor}>{place.name}</text>
                </g>
              </g>
            );
          })}
        </svg>
        <div className="map-grain" aria-hidden="true" />
        <svg className="map-compass" viewBox="-30 -38 60 68" aria-hidden="true">
          <circle r="20" fill="none" stroke="currentColor" strokeWidth=".8" />
          <path d="M0 -26 L3 -3 L26 0 L3 3 L0 26 L-3 3 L-26 0 L-3 -3Z" fill="none" stroke="currentColor" strokeWidth=".9" strokeLinejoin="round" />
          <path d="M0 -26 L3 -3 L0 0Z M0 26 L-3 3 L0 0Z M26 0 L3 3 L0 0Z M-26 0 L-3 -3 L0 0Z" fill="currentColor" />
          <path d="M0 -15 L1.8 -1.8 L15 0 L1.8 1.8 L0 15 L-1.8 1.8 L-15 0 L-1.8 -1.8Z" transform="rotate(45)" fill="none" stroke="currentColor" strokeWidth=".7" />
          <text y="-29" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="currentColor" fontFamily="'Old Standard TT', Georgia, serif">Пн</text>
        </svg>
        {isZoomed && (
          <button className="map-reset" type="button" onClick={resetView}>← Уся Європа</button>
        )}
        <div className="map-scale" aria-hidden="true">
          <span className="map-scale-bar" style={{ width: `${scaleWidth}px` }} />
          <span>{scaleKm.toLocaleString('uk-UA')} км</span>
        </div>
      </div>
      <figcaption className="map-legend">
        <span className="map-key"><i className="swatch visited" />Відвідані країни</span>
        <span className="map-key"><i className="swatch other" />Решта світу</span>
        <span className="map-credit">Кордони · Natural Earth</span>
      </figcaption>
      {selectedPin && <span className="sr-only">Обрано: {selectedPin.id}</span>}
    </figure>
  );
}
