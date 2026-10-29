import style from './GiftHeader.module.css'

const GiftHeader = () => {
    return(
        <header className={style.top}>
            <a className={style.logo} href="#">
                <svg viewBox="0 0 76 68" aria-hidden="true">
                    <rect className={style.ink} x="8" y="23" width="60" height="41" rx="7" fill="#FFD84E"/>
                    <rect className={style.ink} x="3" y="5" width="70" height="20" rx="7" fill="#FFE98C"/>
                    <rect className={style.ink} x="31" y="5" width="14" height="59" fill="#FF3F86"/>
                </svg>
                <span data-nosnippet>Подаруночок</span>
            </a>
            <div className={style.status}>
                <svg viewBox="0 0 50 56" aria-hidden="true">
                    <path className={style.ink} d="M14 26V17a11 11 0 0 1 22 0v9" fill="none"/>
                    <rect className={style.ink} x="6" y="25" width="38" height="28" rx="8" fill="#FFB400"/>
                </svg>
                <span data-nosnippet>Зачинено</span>
            </div>
        </header> 
    )
}

export default GiftHeader