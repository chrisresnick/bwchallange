import React from "react";

export default ({selected, setSelected, pages}) => {
    return (
        <div className="menu">
            {pages.map((page, idx) => {
                return (
                <h2 
                    key={`link${idx}`}
                    className={selected===idx?"linkSelected":"linkNotSelected"}
                    onClick={() => setSelected(idx)}
                >
                    {page.title}
                </h2>)
            })}
        </div>
    )
}