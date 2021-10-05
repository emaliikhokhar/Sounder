import React from 'react'
import "./Player.css"

interface IProps {
    playlist: Object 
}

const Player = (props: IProps) => {
    return (
        <div className="bodyDiv">
            <img src={require("../../Images/Ae Saba Mustafa.jpg")}/>
        </div>
    )
}

export default Player