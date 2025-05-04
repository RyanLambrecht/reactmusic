import React from "react";
import "../css/styles.css";

const HorizontalList = ({ items }) => {
    return (
        <div className="horizontal-list">
            {items.map((item, index) => (
                <div key={index} className="list-item">
                    {item}
                </div>
            ))}
        </div>
    );
};

export default HorizontalList;