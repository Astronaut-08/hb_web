import style from './Gift.module.css'
import Dots from '../../components/Dots/Dots.jsx'
import GiftHeader from '../../components/GiftHeader/GiftHeader.jsx'
import GiftArt from '../../components/GiftArt/GiftArt.jsx'
import KeyForm from '../../components/KeyForm/KeyForm.jsx'

const Gift = () => {
    return (
        <div className={style.page}>
            <Dots />
            <GiftHeader />

            <main className={style.hero}>
                <p className={style.badge} data-nosnippet>З днем народження!</p>
                <h1 data-nosnippet>Для тебе є <span className={style.wavy}>подарунок!</span></h1>
                <p className={style.lead} data-nosnippet>Він запакований і зачинений. Введи секретний ключ, і коробка відкриється.</p>

                <GiftArt />
                <KeyForm />
            </main>
        </div>
    )
}

export default Gift