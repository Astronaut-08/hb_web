import style from './Path.module.css'

const Path = () => {
    return (
        <>
        <svg className={style.route} viewBox="0 0 1000 300" preserveAspectRatio="none" aria-hidden="true">
            <path d="M-20 286 C 220 120, 520 70, 1020 210" fill="none" stroke="#F0B9A3" strokeWidth="1.6" strokeDasharray="3 9" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
        </svg>
        </>
    )
}

export default Path