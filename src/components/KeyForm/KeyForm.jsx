import style from './KeyForm.module.css'

const KeyForm = () => {
    return (
    <form className={style.unlock} action="#">
      <label className={style.label} for="key">Секретний ключ</label>
      <div className={style["unlock-row"]}>
        <div className={style.field}>
          <svg viewBox="0 0 80 80" aria-hidden="true">
            <circle cx="26" cy="27" r="15" fill="none" stroke="#FF3F86" stroke-width="9"/>
            <path d="M37 38 L67 68 M55 56 l9 -9 M63 64 l8 -8" fill="none" stroke="#FF3F86" stroke-width="9" stroke-linecap="round"/>
          </svg>
          <input id="key" name="key" type="text" placeholder="Введи ключ" autocomplete="off" spellcheck="false" />
        </div>
        <button type="submit">Розпакувати</button>
      </div>
      <p className={style.hint}>Не можеш здогадатись? Запитай в того, хто надіслав подарунок.</p>
    </form>
    )
}

export default KeyForm