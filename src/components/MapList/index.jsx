import React from "react";

const MapList = ({list}) => {
    return list.map(task => <li>{task}</li>);
}

export default MapList;