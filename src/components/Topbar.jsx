import '../styles/topbar.css'


export default function Topbar({ current, best }){




    return(
        <div className='tb'>
        <div>Memory Game</div>
        <div>Score to beat {best}</div>
        <div>Current Score {current} </div>
        </div>
    )
}