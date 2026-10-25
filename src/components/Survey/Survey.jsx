import { useState } from 'react'
import style from './Survey.module.css'

const Survey = () => {
    const [noPosition, setNoPosition] = useState({x:0, y:0})

    const handleRunAway = () => {
        const randomX = (Math.random() - 0.5) * 300
        const randomY = (Math.random() - 0.5) * 200
        setNoPosition({x:randomX, y:randomY})
    }

    return (
        <>
        <svg width="0" height="0" style={{'position': 'absolute'}} aria-hidden="true">
        <defs>
            <symbol id="h" viewBox="0 0 24 22"><path fill="currentColor" d="M12 21.2C5.6 16.1 1.5 12.4 1.5 7.6 1.5 4.3 4 2 7 2c2 0 3.8 1 5 2.8C13.2 3 15 2 17 2c3 0 5.5 2.3 5.5 5.6 0 4.8-4.1 8.5-10.5 13.6z"/></symbol>
        </defs>
        </svg>

        <section className={style.content}>
            <p className={style.eyebrow}>З днем народження!</p>
            <div className={style.divider} aria-hidden="true"><i></i><svg><use href="#h"/></svg><i></i></div>
            <h1>
            <span className={style.name}>Кохання,</span>
            <span className={style.ask}>Чи содобалось тобі привітання?</span>
            </h1>
            <p className={style.sub}>Я сподіваюсь, що так. Як то кажуть Happy Wife Happy Life.</p>

            {/* <!-- Обидві кнопки ведуть на екран «Ура» (#tak). «Ні» тікає від курсора, а якщо її все ж натиснути, відповідь теж «так». --> */}
            <div className={style.choices}>
            <a className={`${style.btn} ${style.yes}`} href="#tak">Так</a>
            <span className={style["no-wrap"]}>
                <span className={`${style.btn} ${style.no} ${style.ghost} ${style.g3}`} aria-hidden="true">Ні</span>
                <span className={`${style.btn} ${style.no} ${style.ghost} ${style.g2}`} aria-hidden="true">Ні</span>
                <span className={`${style.btn} ${style.no} ${style.ghost} ${style.g1}`} aria-hidden="true">Ні</span>

                {/* Ні що постійно тікає */}
                <a 
                className={`${style.btn} ${style.no}`} 
                href="#tak"
                onMouseEnter={handleRunAway}
                style={{
                    'transform': `translate(${noPosition.x}px, ${noPosition.y}px)`,
                }}>Ні</a>
            </span>
            </div>
        </section>
        </>
    )
}

export default Survey