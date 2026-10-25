import style from './Dots.module.css'

const Dots = () => {
    return (
        <svg className={style.dots} viewBox="0 0 2000 1250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <circle cx="1165" cy="125" r="7"/><circle cx="1055" cy="208" r="10"/><circle cx="1403" cy="180" r="8"/>
            <circle cx="1736" cy="208" r="6"/><circle cx="1930" cy="236" r="11"/><circle cx="1027" cy="458" r="6"/>
            <circle cx="1055" cy="720" r="8"/><circle cx="1847" cy="832" r="6"/><circle cx="1957" cy="888" r="8"/>
            <circle cx="1097" cy="1193" r="11"/><circle cx="1250" cy="1193" r="6"/><circle cx="1888" cy="1193" r="8"/>
        </svg>
    )
}

export default Dots