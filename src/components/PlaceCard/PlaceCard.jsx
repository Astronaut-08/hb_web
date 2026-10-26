import '../styleForGift/birthday.css'

const CARD_TILTS = [-1.8, 1.2, -0.8, 1.9];

function degreesMinutes(value, positive, negative) {
  const absolute = Math.abs(value);
  let degrees = Math.floor(absolute);
  let minutes = Math.round((absolute - degrees) * 60);
  if (minutes === 60) {
    degrees += 1;
    minutes = 0;
  }
  return `${degrees}°${String(minutes).padStart(2, '0')}′ ${value >= 0 ? positive : negative}`;
}

export default function PlaceCard({ place, pin, previous, next, index, onSelect }) {
  return (
    <article className="place-card" aria-live="polite">
      <div>
        <p className="place-country">{place.country}</p>
        <h2>{place.name}</h2>
        <p className="place-region">{place.region}</p>
        <p className="place-coordinates">
          {place.approx ? '≈ ' : ''}
          {degreesMinutes(pin.lat, 'пн. ш.', 'пд. ш.')}, {degreesMinutes(pin.lon, 'сх. д.', 'зх. д.')}
        </p>
      </div>
      <figure className="photo-print" style={{ '--tilt': `${CARD_TILTS[index % CARD_TILTS.length]}deg` }}>
        <div className="photo-frame">
          <span className="photo-corner top-left" />
          <span className="photo-corner top-right" />
          <span className="photo-corner bottom-left" />
          <span className="photo-corner bottom-right" />
          <div className="photo-placeholder">
            {place.photo ? (
              <img src={place.photo} alt={place.name} />
            ) : (
              <>
                <svg className="photo-lens" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                  <circle cx="24" cy="24" r="21" />
                  <circle cx="24" cy="24" r="14.5" />
                  <circle cx="24" cy="24" r="8" />
                  <circle cx="24" cy="24" r="2.6" fill="currentColor" stroke="none" />
                  <path d="M12.5 15.5 A14.5 14.5 0 0 1 20 10" strokeLinecap="round" />
                </svg>
                <span>Тут буде твоє фото</span>
              </>
            )}
          </div>
        </div>
        <figcaption className={`place-note${place.note ? '' : ' is-empty'}`}>
          {place.note || 'Тут буде мій підпис до цього кадру'}
        </figcaption>
      </figure>
      <nav className="place-steps" aria-label="Перемикання місць">
        <button type="button" onClick={() => onSelect(previous.id)}>← {previous.name}</button>
        <button type="button" onClick={() => onSelect(next.id)}>{next.name} →</button>
      </nav>
    </article>
  );
}
