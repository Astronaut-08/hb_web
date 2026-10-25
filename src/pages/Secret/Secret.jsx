import style from './Secret.module.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Bokeh from '../../components/Bokeh/Bokeh.jsx'
import Path from '../../components/Path/Path.jsx'
import Hearts from '../../components/Hearts/Hearts.jsx'
import Frame from '../../components/Frame/Frame.jsx'
import Survey from '../../components/Survey/Survey.jsx'
import ConfirmSecret from '../../components/ConfirmSecret/ConfirmSecret.jsx'

const Secret = () => {
    const navigate = useNavigate()

    // check secret word
    useEffect(() => {
        const ifAccess = localStorage.getItem('secretKey')

        if (ifAccess !== 'flamingo') {
            navigate('/')
        }
    }, [navigate])

    return (
        <div className={style['main-page']}>
        <div className={style.stage}>
            <Bokeh />
            <Path />
            <Hearts />
            <Frame />
            <Survey />
            <ConfirmSecret />
            <div className={style.date}>06.12.2026</div>
        </div>
        </div>
    )
}

export default Secret