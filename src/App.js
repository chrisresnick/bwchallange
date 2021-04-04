import React, {useState} from 'react';
import Menu from "./menu"
import content from "./content";

//The menu component makes it easy to add more pages; as longs as the JSON follows the same pattern, new pages
//can be added to the "pages" array in the JSON and links will be added to the menu and will correspond to the correct content 
function App() {
  const pages = content.pages
  const [selected, setSelected] = useState(0)
  return (
    <div 
      className="main"
      style={{
        backgroundImage: `url("./imgs/${pages[selected].blocks[0].background}")`,
        backgroundSize: "cover",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        minHeight: "100vh",
        width: "100vw",
        padding: "5vh 5vw 0 5vw"
      }}
    >
       <div className="header">
        <div className="menuHolder">
          <img src="./imgs/abc_logo.svg" alt="company logo"/>
          <Menu selected={selected} setSelected={setSelected} pages={pages}/>
        </div>
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
        <div className="ctaButton">
          LET'S TALK. 
        </div>
      </div>
    </div>
  );
}

export default App;
