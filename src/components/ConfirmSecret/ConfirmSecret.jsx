import style from './ConfirmSecret.module.css'

const ConfirmSecret = () => {
    return (
        <>
        <svg width="0" height="0" style={{'position': 'absolute'}} aria-hidden="true">
        <defs>
            <symbol id="h" viewBox="0 0 24 22"><path fill="currentColor" d="M12 21.2C5.6 16.1 1.5 12.4 1.5 7.6 1.5 4.3 4 2 7 2c2 0 3.8 1 5 2.8C13.2 3 15 2 17 2c3 0 5.5 2.3 5.5 5.6 0 4.8-4.1 8.5-10.5 13.6z"/></symbol>
        </defs>
        </svg>

        <section className={style.thanks} id="tak" aria-label="Відповідь">
        <div className={style.frame} aria-hidden="true"></div>
        <div className={style.rise} aria-hidden="true">
            <svg style={{'--x':'12%','--s':'26px','--t':'7s','--d':'0s'}}><use href="#h"/></svg>
            <svg style={{'--x':'26%','--s':'16px','--t':'9s','--d':'-3s'}}><use href="#h"/></svg>
            <svg style={{'--x':'40%','--s':'22px','--t':'8s','--d':'-5s'}}><use href="#h"/></svg>
            <svg style={{'--x':'58%','--s':'14px','--t':'10s','--d':'-2s'}}><use href="#h"/></svg>
            <svg style={{'--x':'72%','--s':'28px','--t':'7.5s','--d':'-4s'}}><use href="#h"/></svg>
            <svg style={{'--x':'86%','--s':'18px','--t':'9.5s','--d':'-6s'}}><use href="#h"/></svg>
        </div>
        <div className={style["thanks-body"]}>
            <h2>Дякую!</h2>
            <p>Кохаю неймовірно! Ти найкраща людина яку я зустрічав у своємо житті!</p>
            <a className={style.back} href="#">Повернутися</a>
        </div>
        </section>
        </>
    )
}

export default ConfirmSecret