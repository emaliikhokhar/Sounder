import "./Player.css"
import MustafaJaanERehmat from '../../Images/Mustafa Jaan-e-Rehmat.jpg'
import AeSabaMustafa from '../../Images/Ae Saba Mustafa.jpg'
import MeraDilBadalDe from '../../Images/Mera Dil Badal De.jpg'
import SeharKaWaqtTha from '../../Images/Sehar Ka Waqt Tha.jpg'
import { MdArrowForwardIos, MdArrowBackIosNew, MdOutlinePause } from "react-icons/md";

interface IProps {
    playlist: Object,
    soundActive: Object,
    moveForward: (id: number) => void,
    moveBackward: (id: number) => void
}
const Player = (props: IProps) => {
    let temp: any = props.soundActive;
    return (
        <div className="bodyDiv">
            <div>
                <div className="imgDisplay">
                    {
                        temp.name === "Mustafa Jaan-e-Rehmat" ? <img src={MustafaJaanERehmat} alt="AlbumPhoto" className="imgClass" /> : null
                    }
                    {
                        temp.name === "Ae Saba Mustafa" ? <img src={AeSabaMustafa} alt="AlbumPhoto" className="imgClass" /> : null
                    }
                    {
                        temp.name === "Mera Dil Badal De" ? <img src={MeraDilBadalDe} alt="AlbumPhoto" className="imgClass" /> : null
                    }
                    {
                        temp.name === "Sehar Ka Waqt Tha" ? <img src={SeharKaWaqtTha} alt="AlbumPhoto" className="imgClass" /> : null
                    }
                </div>
                <div className="titleDisplay">
                    <span>{temp.name}</span>
                </div>
                <div className="artistDisplay">
                    <span>{temp.artist}</span>
                </div>
                <div>

                </div>
                <div className="playerButtons">
                    <div className="icons" >
                        <MdArrowBackIosNew />
                    </div>
                    <div className="icons" >
                        <MdOutlinePause />
                    </div>
                    <div className="icons" >
                        <MdArrowForwardIos />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player