import './scss/style.scss';
import Header from './component/Header';
import Footer from './component/Footer';
import Section from './component/Section';
import { useState, useRef } from 'react';

export default function App() {
  let [num, setNum] = useState(0);
  let frame = useRef(null);  

  const movePrev = () => {
    setNum(++num);
    console.log(num);
    frame.current.style = `transform: rotate(${45*num}deg)`;    
  }

  const moveNext = () => {
    setNum(--num);
    console.log(num);
    frame.current.style = `transform: rotate(${45*num}deg)`; 
  }

  return (    
      <>
        <Header /> 
        <Section frame={frame} />
        <Footer />  

        <div className="prev" onClick={movePrev}></div>
        <div className="next" onClick={moveNext}></div>
      </>
  );
}

