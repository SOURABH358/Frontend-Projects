import React from "react";

function Header({mode, setMode}){
    function handleClick(){
        setMode(pre=>{
            return pre===''?'dark':'';
        })
    }
    return (<section className="header__section">
        <h1 className="title">Frontend Projects</h1>
        <div className={`mode ${mode==='dark'?'toggle':''}`}>
            <div className="mode__switch" onClick={handleClick}></div>
        </div>
    </section>)
}
export default React.memo(Header)