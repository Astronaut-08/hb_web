import { useNavigate } from 'react-router-dom'
import '../../components/styleForGift/birthday.css'
import { useEffect, useState } from 'react'
import { PLACES, MAP } from '../../data/mapData'
import BirthdayHeader from '../../components/BirthdayHeader/BirthdayHeader.jsx'
import MapPlate from '../../components/MapPlate/MapPlate.jsx'
import PlaceCard from '../../components/PlaceCard/PlaceCard.jsx'
import PlaceIndex from '../../components/PlaceIndex/PlaceIndex.jsx'

const Hello = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const isAccept = localStorage.getItem('secretKey')

        if (isAccept !== 'flamingo') {
            navigate('/')
        }
    })

    const [selection, setSelection] = useState({ id: PLACES[0].id, revision: 0 });
    const activeId = selection.id;
    const selectPlace = (id) => setSelection((current) => ({ id, revision: current.revision + 1 }));
    const activeIndex = PLACES.findIndex((place) => place.id === activeId);
    const safeIndex = activeIndex < 0 ? 0 : activeIndex;
    const place = PLACES[safeIndex];
    const pin = MAP.pins.find((item) => item.id === place.id);
    const previous = PLACES[(safeIndex + PLACES.length - 1) % PLACES.length];
    const next = PLACES[(safeIndex + 1) % PLACES.length];

    return (
        <main className="birthday-map-page">
            <BirthdayHeader activatedId={place.id} onSelect={selectPlace} />
            <section className="atlas-layout" aria-label="Мапа подорожей Роксолани">
            <MapPlate activeId={place.id} selectionRevision={selection.revision} onSelect={selectPlace} />
            <aside className="map-sidebar">
                <PlaceCard
                place={place}
                pin={pin}
                previous={previous}
                next={next}
                index={safeIndex}
                onSelect={selectPlace}
                />
                <PlaceIndex places={PLACES} activeId={place.id} onSelect={selectPlace} />
            </aside>
            </section>
        </main>
    )
}

export default Hello