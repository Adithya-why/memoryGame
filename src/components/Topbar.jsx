


export default function Topbar({ current, best }){




    return(
        <div className='tb'>
        <div className="hd">Pokemon Memory Game</div>
        <div className="wr">
            <div>Score to beat:  <span>{best}</span></div>
            <div>Current Score:  <span>{current}</span> </div>
        </div>
        </div>
    )
}