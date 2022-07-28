import React from "react";

function Card(props) {
    const _item = props.item
    let text = _item.desc
    if(_item.desc.length > 205) {
        text = _item.desc.slice(0, 205) + '...'
    }
    return(
        <div className="card">
            <img src={`./src/img/${_item.img}`} className="card-image" />
            <div className="card-body">
                <div className="card-header">
                    <i class="fa-solid fa-location-dot marker"></i>
                    <span className="card-country">{_item.location}</span>
                    <a href="https:\\google.maps" className="google-maps">View on Google Maps</a>
                </div>
                <h2 className="card-name">{_item.name}</h2>
                <h5 className="card-date">{_item.date}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
}

export default Card