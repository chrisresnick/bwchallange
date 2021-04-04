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
        flexDirection:"column",
        justifyContent:"space-between",
        backgroundImage: `url("./imgs/${pages[selected].blocks[0].background}")`,
        backgroundSize:"cover",
        height: "100vh",
        width: "100vw",
        paddingTop: "5vh",
        paddingLeft: "5vw",
        paddingRight: "5vw"
      }}
    >
      <div className="header">
        <Menu selected={selected} setSelected={setSelected}/>
        <div className="contact">Contact Us</div>
      </div>
      <div className="marquee">
        <div className="headline">
            {pages[selected].blocks[0].headline}
        </div>
        <div className="subhead">
          {pages[selected].blocks[0].subhead}
        </div>
      </div>
      <div className="callToAction">
        <div className="ctaInner">
          {pages[selected].blocks[0].cta}  
        </div>
      </div>
    </div>
  );
}

export default App;
