import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Player from './Components/Player/Player';

function App() {
  let tracks = {
    1: {
      name: "Mustafa Jaan-e-Rehmat",
      artist: "Atif Aslam",
    },
    2: {
      name: "Ae Saba Mustafa",
      artist: "Rafaqat Ali Khan",
    },
    3: {
      name: "Mera Dil Badal De",
      artist: "Junaid Jamshed",
    },
    4: {
      name: "Sehar Ka Waqt Tha",
      artist: "Arbaaz",
    }
  }

  const [playlist, setPlaylist] = useState(tracks);

  return (
    <div className="App-header">
      <Header heading="Sounder App"/>
      <Player playlist={playlist}/>
      <Footer outro="Powered by " poweredBy = "Ali A. Khokhar"/>
    </div>
  );
}

export default App;
