import "./Player.css"
import MustafaJaanERehmat from '../../Images/Mustafa Jaan-e-Rehmat.jpg'
import AeSabaMustafa from '../../Images/Ae Saba Mustafa.jpg'
import MeraDilBadalDe from '../../Images/Mera Dil Badal De.jpg'
import SeharKaWaqtTha from '../../Images/Sehar Ka Waqt Tha.jpg'
import { MdArrowForwardIos, MdArrowBackIosNew, MdOutlinePause, MdOutlinePlayArrow } from "react-icons/md";
import { useEffect, useRef, useState } from "react"
import MustafaJaanERehmatAudio from '../../Soundtracks/Mustafa Jaan-e-Rehmat.mp3'
import AeSabaMustafaAudio from '../../Soundtracks/AeSabaMustafa.mp3'
import MeraDilBadalDeAudio from '../../Soundtracks/Mera Dil Badal De.mp3'
import SeharKaWaqtThaAudio from '../../Soundtracks/Sehar Ka Waqt Tha.mp3'

interface IProps {
    playlist: Object,
    soundActive: Object,
    moveForward: (id: number) => void,
    moveBackward: (id: number) => void
}

const Player = (props: IProps) => {
    let temp: any = props.soundActive;
    const audioEl:any = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    
   
    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        }
        else {
            audioEl.current.pause();
        }
    })

    const pauseTheTrack = () => {
        setIsPlaying(false);
    }
    const playTheTrack = () => {
        setIsPlaying(true);
    }
    return (
        <div className="bodyDiv">
            <div>
                <div className="imgDisplay">
                    {
                        temp.name === "Mustafa Jaan-e-Rehmat" ?
                            <img src={MustafaJaanERehmat} alt="AlbumPhoto" className="imgClass" /> : null
                    }
                    {
                        temp.name === "Ae Saba Mustafa" ?
                            <img src={AeSabaMustafa} alt="AlbumPhoto" className="imgClass" /> : null
                    }
                    {
                        temp.name === "Mera Dil Badal De" ?
                            <img src={MeraDilBadalDe} alt="AlbumPhoto" className="imgClass" /> : null
                    }
                    {
                        temp.name === "Sehar Ka Waqt Tha" ?
                            <img src={SeharKaWaqtTha} alt="AlbumPhoto" className="imgClass" /> : null
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
                        <MdArrowBackIosNew onClick={() => { return props.moveBackward(temp.id) }} />
                    </div>

                    {/* Audio */}
                    {
                        temp.name === "Mustafa Jaan-e-Rehmat" ?
                        <audio src={MustafaJaanERehmatAudio} ref={audioEl} autoPlay /> : null
                    }
                    {
                        temp.name === "Ae Saba Mustafa" ?
                        <audio src={AeSabaMustafaAudio} ref={audioEl} autoPlay /> : null
                    }
                    {
                        temp.name === "Mera Dil Badal De" ?
                        <audio src={MeraDilBadalDeAudio} ref={audioEl} autoPlay /> : null
                    }
                    {
                        temp.name === "Sehar Ka Waqt Tha" ?
                        <audio src={SeharKaWaqtThaAudio} ref={audioEl} autoPlay /> : null
                    }
                    
                    {
                        !isPlaying ?
                            <div className="icons" >
                                <MdOutlinePlayArrow onClick={() => { return playTheTrack() }} />
                            </div> :
                            <div className="icons" >
                                <MdOutlinePause onClick={() => { return pauseTheTrack() }} />
                            </div>
                    }
                    <div className="icons" >
                        <MdArrowForwardIos onClick={() => { return props.moveForward(temp.id) }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player