import './scss/style.scss';
import Header from './component/Header';
import Footer from './component/Footer';
import Section from './component/Section';
import { useState } from 'react';

export default function App() {
  let [num, setNum] = useState(0);

  const movePrev = () => {
    setNum(--num);
    console.log(num);
  }

  const moveNext = () => {
    setNum(++num);
    console.log(num);
  }

  return (    
      <>
        <Header /> 
        <Section />
        <Footer />  

        <div className="prev" onClick={movePrev}></div>
        <div className="next" onClick={moveNext}></div>
      </>
  );
}

