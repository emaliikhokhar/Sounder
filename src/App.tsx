import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Player from './Components/Player/Player';

function App() {
  let tracks = [
    {
      id: 1,
      name: "Mustafa Jaan-e-Rehmat",
      artist: "Atif Aslam",
    },
    {
      id: 2,
      name: "Ae Saba Mustafa",
      artist: "Rafaqat Ali Khan",
    },
    {
      id: 3,
      name: "Mera Dil Badal De",
      artist: "Junaid Jamshed",
    },
    {
      id: 4,
      name: "Sehar Ka Waqt Tha",
      artist: "Arbaaz",
    }
  ]

  const [playlist] = useState(tracks);
  const [sound, setSound] = useState(playlist[0])

  const moveForward = (id: number) => {
    console.log("clicked")
    if (id === tracks.length) {
      setSound(playlist[0])
      console.log(playlist[0])
    }
    else {
      setSound(playlist[id+1])
      console.log(playlist[id+1])
    }
  }

  const moveBackward = (id: number) => {
    if (id === tracks.length) {
      setSound(playlist[tracks.length])
      console.log(playlist[tracks.length])
    }
    else {
      setSound(playlist[id-1])
      console.log(playlist[id-1])
    }
  }

  return (
    <div className="App-header">
      <Header heading="Sounder App"/>
      <Player playlist={playlist} soundActive={sound} moveForward={moveForward} moveBackward={moveBackward}/>
      <Footer outro="Powered by " poweredBy = "Ali A. Khokhar"/>
    </div>
  );
}

export default App;
