import "./Player.css"

interface IProps {
    playlist: Object,
    soundActive: Object,
    moveForward: (id: number) => void,
    moveBackward: (id: number) => void
}

const Player = (props: IProps) => {
    return (
        <div className="bodyDiv">
            <button onClick={() => props.moveBackward(2)}>Down</button>
            <button onClick={() => props.moveForward(0)}>Up</button>
            
        </div>
    )
}

export default Player