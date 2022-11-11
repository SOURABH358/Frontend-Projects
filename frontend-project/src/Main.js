import React from "react";
import { GlobalContext } from "./context";

function Main({ mode }) {
    const { data, tags, changeTag } = GlobalContext()
    const displayTags = () => {
        return tags.map((tag, index) => {
            return <button key = {index} className={tag.active ? 'tag active' : 'tag'} type="button" onClick={() => changeTag(tag.title)}>
                {tag.title[0].toUpperCase() + tag.title.substr(1)}
                </button>
        })
    }
    const displayCards = () =>{
        return data.map(card=>{
            return <a href = {card.link}><div className="card">
                <div className="card__hero"><img src = {card.image}/></div>
                <h2>{card.title}</h2>
                </div></a>
        })
    }
    if (!data.length) {
        return
        (<section className={`main__section ${mode}`}>
            <h1>Loading...</h1>
        </section >)
    }
    return <section className={`main__section ${mode}`}>
        <div className="tags__container">
            <h2 className="tag__title">Tags</h2>
            <div className="tags__box">
                {displayTags()}
            </div>
        </div>
        <div className="card__container">
            {displayCards()}
        </div>
    </section>
}
export default React.memo(Main)