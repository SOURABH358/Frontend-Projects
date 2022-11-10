import React from "react";
import { GlobalContext } from "./context";

function Main({ mode }) {
    const { data } = GlobalContext()
    if (!data.length) {
        return
        <section className={`main__section ${mode}`}>
            <h1>Loading...</h1>
        </section >
    }
    return <section className={`main__section ${mode}`}>
        <div></div>
        <div className="card__container">

        </div>
    </section>
}
export default React.memo(Main)