import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import { useState } from 'react';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#1c1c1c';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
    }
    
  }
  return (
  <>
  {/* {<BrowserRouter>} */}
 
  <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/> 
  <div className="container my-3">
  <TextForm heading="Enter text" mode={mode}/>
    {/*<About/>*/}
    {/*<TextForm heading="Enter the text to be analyzed"/>*/}

    
      {/* {<Routes>
        <Route path="/" element={<TextForm heading="Enter the text to be analyzed" mode={mode} />} />
        <Route path="/about" element={<About />} />
      </Routes>} */}
    
    

  </div>
  {/* {</BrowserRouter>} */}
 
  </>
  );
}

export default App;
