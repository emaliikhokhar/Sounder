import './Header.css'

interface IProps {
    heading?: string
}

const Header = (props: IProps) => {


    return (
        <div className="mainDiv">
            <div className="header">
                {props.heading}
            </div>
        </div>
    )
}

export default Header
