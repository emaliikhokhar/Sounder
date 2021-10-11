import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Player from './Components/Player/Player';

function App() {
  interface typedObject {
    id: number,
    name: string,
    artist: string,
    soundKey: string
  }
  let tracks: typedObject[] = [
    {
      id: 1,
      name: "Mustafa Jaan-e-Rehmat",
      artist: "Atif Aslam",
      soundKey: "MustafaJaanERehmat"
    },
    {
      id: 2,
      name: "Ae Saba Mustafa",
      artist: "Rafaqat Ali Khan",
      soundKey: "AeSabaMustafa"
    },
    {
      id: 3,
      name: "Mera Dil Badal De",
      artist: "Junaid Jamshed",
      soundKey: "MeraDilBadalDe"
    },
    {
      id: 4,
      name: "Sehar Ka Waqt Tha",
      artist: "Arbaaz",
      soundKey: "SeharKaWaqtTha"
    }
  ]

  const [playlist] = useState(tracks);
  const [sound, setSound] = useState(playlist[0])

  const moveForward = (id: number) => {
    if (id === tracks.length) {
      setSound(playlist[0])
    }
    else {
      setSound(playlist[id])
    }
  }

  const moveBackward = (id: number) => {
    if (id === 1) {
      setSound(playlist[tracks.length - 1])
    }
    else {
      setSound(playlist[id-2])
    }
  }

  return (
    <div className="App-header">
      <Header heading="Sounder App"/>
      <Player playlist={playlist} soundActive={sound} moveForward={moveForward} moveBackward={moveBackward}/>
      <Footer outro="Developed by " poweredBy = "Ali A. Khokhar"/>
    </div>
  );
}

export default App;
