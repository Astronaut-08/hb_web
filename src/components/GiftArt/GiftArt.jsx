import style from './GiftArt.module.css'

const GiftArt = () => {
    return (
            // Подарунок. Усі кольори і лінії задані в podarunok.css
            <figure className={style.art}>
            <svg viewBox="0 0 950 930" role="img" aria-labelledby="art-title">
                <title id="art-title">Зачинена подарункова коробка з бантом, замком і біркою</title>
                <defs>
                    <symbol id="spark" viewBox="-50 -50 100 100"><path d="M0 -50 C0 -18 18 0 50 0 C18 0 0 18 0 50 C0 18 -18 0 -50 0 C-18 0 0 -18 0 -50Z"/></symbol>
                    <path id="bubble-shape" d="M560 25 H905 a56 56 0 0 1 56 56 a56 56 0 0 1 -56 56 H690 L592 207 L640 137 H560 a56 56 0 0 1 -56 -56 a56 56 0 0 1 56 -56 Z"/>
                </defs>

                <circle className={style["halo-1"]} cx="445" cy="475" r="430"/>
                <circle className={style["halo-2"]} cx="445" cy="475" r="320"/>
                <ellipse className={style.floor} cx="445" cy="812" rx="300" ry="28"/>

                {/* <!-- Коробка --> */}
                <rect className={`${style.ink} ${style.body}`} x="192" y="410" width="505" height="390" rx="42"/>
                <g className={style["dot-body"]}>
                    <circle cx="257" cy="477" r="16"/><circle cx="333" cy="567" r="15"/><circle cx="250" cy="678" r="15"/><circle cx="340" cy="741" r="15"/>
                    <circle cx="583" cy="568" r="15"/><circle cx="646" cy="588" r="15"/><circle cx="563" cy="705" r="15"/><circle cx="653" cy="733" r="15"/>
                </g>
                <rect className={`${style.ink} ${style.ribbon}`} x="397" y="412" width="95" height="388"/>
                <rect className={`${style.ink} ${style.lid}`} x="160" y="290" width="570" height="122" rx="38"/>
                <g className={style["dot-lid"]}>
                    <circle cx="225" cy="353" r="11"/><circle cx="300" cy="353" r="11"/><circle cx="595" cy="353" r="11"/><circle cx="670" cy="353" r="11"/>
                </g>
                <rect className={`${style.ink} ${style.ribbon}`} x="397" y="292" width="95" height="120"/>

                {/* <!-- Хвости банта --> */}
                <path className={`${style.ink} ${style.ribbon}`} d="M412 298 L350 402 L416 414 L438 340 Z"/>
                <path className={`${style.ink} ${style.ribbon}`} d="M478 298 L540 402 L474 414 L452 340 Z"/>

                {/* <!-- Бант --> */}
                <ellipse className={`${style.ink} ${style.ribbon}`} cx="345" cy="232" rx="102" ry="68" transform="rotate(-18 345 232)"/>
                <ellipse className={`${style.ink} ${style.ribbon}`} cx="545" cy="232" rx="102" ry="68" transform="rotate(18 545 232)"/>
                <ellipse className={style.shine} cx="335" cy="225" rx="55" ry="26" transform="rotate(-18 335 225)"/>
                <ellipse className={style.shine} cx="552" cy="218" rx="55" ry="26" transform="rotate(18 552 218)"/>
                <circle className={`${style.ink} ${style.knot}`} cx="445" cy="268" r="45"/>

                {/* <!-- Бирка на нитці --> */}
                <path className={style.string} d="M488 300 C545 335 565 385 548 428"/>
                <g transform="translate(596 470) rotate(18)">
                <path className={`${style.ink} ${style.tag}`} d="M-82 -26 Q-82 -34 -74 -34 L54 -34 L90 0 L54 34 L-74 34 Q-82 34 -82 26 Z"/>
                <circle className={style.hole} cx="-62" cy="-14" r="7"/>
                <text className={style["tag-text"]} x="10" y="9" textAnchor="middle" data-nosnippet>ДЛЯ ЛЯНИ</text>
                </g>

                {/* <!-- Замок --> */}
                <path className={style["shackle-out"]} d="M413 582 V552 a30 30 0 0 1 60 0 V582"/>
                <path className={style["shackle-in"]} d="M413 582 V552 a30 30 0 0 1 60 0 V582"/>
                <rect className={`${style.ink} ${style.lock}`} x="390" y="578" width="107" height="88" rx="24"/>
                <circle className={style.keyhole} cx="443" cy="613" r="10"/>
                <rect className={style.keyhole} x="437" y="615" width="12" height="28" rx="5"/>

                {/* <!-- Блискітки --> */}
                <use className={`${style.spark} ${style["spark-w"]}`} href="#spark" x="205" y="43" width="90" height="90"/>
                <use className={`${style.spark} ${style["spark-y"]}`} href="#spark" x="827" y="364" width="66" height="66"/>
                <use className={`${style.spark} ${style["spark-w"]}`} href="#spark" x="107" y="656" width="62" height="62"/>
                <use className={`${style.spark} ${style["spark-y"]}`} href="#spark" x="765" y="793" width="80" height="80"/>

                {/* <!-- Хмаринка з підказкою --> */}
                <rect className={style["bubble-shadow"]} x="510" y="33" width="458" height="112" rx="56"/>
                <use className={`${style.ink} ${style.bubble}`} href="#bubble-shape" />
                <text className={style["bubble-text"]} x="731" y="97" textAnchor="middle" data-nosnippet>Ключ - це стоп-слово!</text>
            </svg>
            </figure>
    )
}

export default GiftArt