import React from 'react'
import "./Footer.css"

interface IProps {
    outro?: string,
    poweredBy?: string
}

const Footer = (props: IProps) => {
    return (
        <div className="footerDiv">
            {props.outro} <b>{props.poweredBy}</b>
        </div>
    )
}

export default Footer
