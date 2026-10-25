import style from './Frame.module.css'

const Frame = () => {
    return (
        <>
        <svg width="0" height="0" style={{'position': 'absolute'}} aria-hidden="true">
        <defs>
            <symbol id="c" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.3"><path d="M4 60V26C4 14 14 4 26 4h34"/><path d="M12 60V30c0-10 8-18 18-18h30" opacity=".5"/><path d="M26 4c-3 6-1 11 5 13-6 1-8 6-5 11"/><circle cx="4" cy="4" r="2.2" fill="currentColor" stroke="none"/></g></symbol>
        </defs>
        </svg>

        <div className={style.frame} aria-hidden="true"></div>
        <svg className={`${style.corner} ${style.tl}`} aria-hidden="true"><use href="#c"/></svg>
        <svg className={`${style.corner} ${style.tr}`} aria-hidden="true"><use href="#c"/></svg>
        <svg className={`${style.corner} ${style.bl}`} aria-hidden="true"><use href="#c"/></svg>
        <svg className={`${style.corner} ${style.br}`} aria-hidden="true"><use href="#c"/></svg>
        </>
    )
}

export default Frame