import React, {useState} from 'react';
import Menu from "./menu"
import content from "./content";

function App() {
  const pages = content.pages
  const [selected, setSelected] = useState(0)
  return (
    <div 
      className="main"
      style={{
        display:"flex",
        backgroundImage: `url("./imgs/${pages[selected].blocks[0].background}")`,
        backgroundSize:"cover",
        height: "100vh",
        width: "100vw"
      }}
    >
      <div className="marquee">
        <Menu selected={selected} setSelected={setSelected}/>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
