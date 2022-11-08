import React from "react";

function Main({mode}){
    return <section className={`main__section ${mode}`}>
        <div></div>
        <div className="card__container">

        </div>
    </section>
}
export default React.memo(Main)