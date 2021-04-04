import React from "react";
import content from "./content";

export default ({selected, setSelected}) => {
    return (
        <div className="menu">
            {content.pages.map((page, idx) => {
                return (
                <h2 
                    className={selected===idx?"linkSelected":"linkNotSelected"}
                    onClick={() => setSelected(idx)}
                >
                    {page.title}
                </h2>)
            })}
        </div>
    )
}