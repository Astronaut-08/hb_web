import { useNavigate } from 'react-router-dom'
import style from './KeyForm.module.css'


const KeyForm = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    const isAccess = localStorage.getItem('secretKey')
    if (isAccess === 'flamingo') {
      navigate('/gift')
    }
  }

  return (
  <form className={style.unlock} action="#">
    <label className={style.label} htmlFor="key">Секретний ключ</label>
    <div className={style["unlock-row"]}>
      <div className={style.field}>
        <svg viewBox="0 0 80 80" aria-hidden="true">
          <circle cx="26" cy="27" r="15" fill="none" stroke="#FF3F86" strokeWidth="9"/>
          <path d="M37 38 L67 68 M55 56 l9 -9 M63 64 l8 -8" fill="none" stroke="#FF3F86" strokeWidth="9" strokeLinecap="round"/>
        </svg>
        <input id="key" name="key" type="text" placeholder="Введи ключ" autoComplete="off" spellCheck="false" onChange={
          (e) => {
            localStorage.setItem('secretKey', e.target.value.toLowerCase())
          }
        }/>
      </div>
      <button type="submit" onClick={handleClick}>Розпакувати</button>
    </div>
    <p className={style.hint}>Не можеш здогадатись? Запитай в того, хто надіслав подарунок.</p>
  </form>
  )
}

export default KeyForm