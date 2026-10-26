import { useMemo } from 'react';
import '../styleForGift/birthday.css'

export default function PlaceIndex({ places, activeId, onSelect }) {
  const groups = useMemo(() => places.reduce((result, place) => {
    const group = result.find((item) => item.country === place.country);
    if (group) group.places.push(place);
    else result.push({ country: place.country, places: [place] });
    return result;
  }, []), [places]);

  return (
    <section className="place-index-section">
      <h3 className="index-heading">Усі місця</h3>
      <ul className="place-index">
        {groups.map((group) => (
          <li key={group.country}>
            <span className="index-country">{group.country}</span>
            <div className="place-pills">
              {group.places.map((place) => {
                const isActive = place.id === activeId;
                return (
                  <button
                    key={place.id}
                    type="button"
                    className={`place-pill${isActive ? ' is-active' : ''}`}
                    aria-pressed={isActive}
                    onClick={() => onSelect(place.id)}
                  >
                    {place.name}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
