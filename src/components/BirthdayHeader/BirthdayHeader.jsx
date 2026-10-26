import '../styleForGift/birthday.css'

export default function BirthdayHeader() {
  return (
    <header className="birthday-header">
      <div className="birthday-heading">
        <p className="eyebrow">Атлас · Європа · 13 місць</p>
        <h1 className='title'>Карта Роксолани</h1>
        <p className='lede'>Міста й місця, де ти була. Натисни на пін, щоб відкрити кадр.</p>
      </div>
      <svg className="birthday-stamp" viewBox="0 0 120 120" role="img" aria-label="Штемпель: день народження Роксолани, 6 грудня 2026">
        <defs>
          <path id="stamp-top" d="M19.5 60 A40.5 40.5 0 0 1 100.5 60" />
          <path id="stamp-bottom" d="M13 60 A47 47 0 0 0 107 60" />
        </defs>
        <g fill="none" stroke="currentColor">
          <circle cx="60" cy="60" r="57" strokeWidth="2" />
          <circle cx="60" cy="60" r="53.5" strokeWidth=".8" />
          <circle cx="60" cy="60" r="32" strokeWidth="1" />
          <path d="M38 63.5 H82" strokeWidth=".8" />
        </g>
        <g fill="currentColor" fontFamily="'Old Standard TT', Georgia, serif" fontWeight="700" fontSize="8.2">
          <text textAnchor="middle">
            <textPath href="#stamp-top" startOffset="50%" textLength="108" lengthAdjust="spacing">З ДНЕМ НАРОДЖЕННЯ</textPath>
          </text>
          <text textAnchor="middle" letterSpacing="2.4">
            <textPath href="#stamp-bottom" startOffset="50%">РОКСОЛАНО</textPath>
          </text>
        </g>
        <g fill="currentColor" fontFamily="'Old Standard TT', Georgia, serif" textAnchor="middle">
          <text x="60" y="58" fontSize="21" fontWeight="700">06.12</text>
          <text x="60" y="77" fontSize="11" letterSpacing="2">2026</text>
        </g>
      </svg>
    </header>
  );
}
