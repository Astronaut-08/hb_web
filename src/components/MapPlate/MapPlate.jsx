import EuropeMap from '../EuropeMap/EuropeMap.jsx';
import '../styleForGift/birthday.css'

export default function MapPlate({ activeId, selectionRevision, onSelect }) {
  return <EuropeMap activeId={activeId} selectionRevision={selectionRevision} onSelect={onSelect} />;
}
