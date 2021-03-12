import React from "react";
import "../../layout/Card.css"

export default function Card(props) {

    const cardStyle = {
        backgroundColor: props.color || "#e00",
        borderColor: props.color || "#e00",
    }

    return(
        <div className="Card" style={cardStyle}>
            <span className="Title Centralizado">{props.title}</span>
            <span className="Content Centralizado">{props.children}</span>
        </div>
    );
}