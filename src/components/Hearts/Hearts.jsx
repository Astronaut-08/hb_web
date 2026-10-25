import style from './Hearts.module.css'

const Hearts = () => {
    return (
        <>
        <svg width="0" height="0" style={{'position': 'absolute'}} aria-hidden="true">
        <defs>
            <symbol id="h" viewBox="0 0 24 22"><path fill="currentColor" d="M12 21.2C5.6 16.1 1.5 12.4 1.5 7.6 1.5 4.3 4 2 7 2c2 0 3.8 1 5 2.8C13.2 3 15 2 17 2c3 0 5.5 2.3 5.5 5.6 0 4.8-4.1 8.5-10.5 13.6z"/></symbol>
        </defs>
        </svg>
        <div className={style.hearts} aria-hidden="true">
            <svg className={style.heart} style={{'--x':'7%','--y':'22%','--s':'30px','--o':'.55','--r':'-14deg','--b':'0px','--d':'0s'}}><use href="#h"/></svg>
            <svg className={style.heart} style={{'--x':'12%','--y':'58%','--s':'18px','--o':.35,'--r':'12deg','--b':'1px','--d':'-1s'}}><use href="#h"/></svg>
            <svg className={style.heart} style={{'--x':'4%','--y':'80%','--s':'26px','--o':.45,'--r':'8deg','--b':'0px','--d':'-2s'}}><use href="#h"/></svg>
            <svg className={style.heart} style={{'--x':'20%','--y':'88%','--s':'14px','--o':.3,'--r':'-10deg','--b':'1.5px','--d':'-3s'}}><use href="#h"/></svg>
            <svg className={style.heart} style={{'--x':'17%','--y':'12%','--s':'16px','--o':.35,'--r':'16deg','--b':'1px','--d':'-4s'}}><use href="#h"/></svg>
            <svg className={style.heart} style={{'--x':'30%','--y':'74%','--s':'12px','--o':.25,'--r':'-6deg','--b':'2px','--d':'-1.5s'}}><use href="#h"/></svg>
            <svg className={style.heart} style={{'--x':'92%','--y':'18%','--s':'32px','--o':.5,'--r':'12deg','--b':'0px','--d':'-2.5s'}}><use href="#h"/></svg>
            <svg className={style.heart} style={{'--x':'86%','--y':'50%','--s':'16px','--o':.35,'--r':'-12deg','--b':'1px','--d':'-3.5s'}}><use href="#h"/></svg>
            <svg className={style.heart} style={{'--x':'95%','--y':'70%','--s':'24px','--o':.45,'--r':'-8deg','--b':'0px','--d':'-0.5s'}}><use href="#h"/></svg>
            <svg className={style.heart} style={{'--x':'80%','--y':'86%','--s':'14px','--o':.3,'--r':'14deg','--b':'1.5px','--d':'-4.5s'}}><use href="#h"/></svg>
            <svg className={style.heart} style={{'--x':'78%','--y':'10%','--s':'14px','--o':.3,'--r':'-16deg','--b':'1px','--d':'-5s'}}><use href="#h"/></svg>
            <svg className={style.heart} style={{'--x':'70%','--y':'78%','--s':'11px','--o':.22,'--r':'6deg','--b':'2px','--d':'-2.2s'}}><use href="#h"/></svg>
            <svg className={style.heart} style={{'--x':'50%','--y':'94%','--s':'12px','--o':.3,'--r':'0deg','--b':'1px','--d':'-3.2s'}}><use href="#h"/></svg>
            <svg className={style.heart} style={{'--x':'36%','--y':'6%','--s':'12px','--o':.28,'--r':-'8deg','--b':'1.5px','--d':'-1.2s'}}><use href="#h"/></svg>
        </div>
        </>
    )
}

export default Hearts