import React from "react";
import content from "./content";

export default ({selected, setSelected}) => {
    return (
        <div className="menu">
            {content.pages.map((c, i) => {
                return (
                <h2 
                    className={selected===i?"linkSelected":"linkNotSelected"}
                    onClick={() => setSelected(i)}
                >
                    {c.title}
                </h2>)
            })}
        </div>
    )
}