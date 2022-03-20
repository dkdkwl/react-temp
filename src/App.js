/*
  react에서 특정 가상돔을 선택해야 될때 querySelector를 쓰면 안되는 이유
  -- 기본 HTML제작방식에서는 일단 브라우저에 realDOM이 먼저 렌더링된 후 추후에 자바스크립트가 해당 돔을 탐색하는 형태 (querySelector)
  -- react에서는 JSX라는 virtualDOM을 메모리상에서 먼저 연산처리하기 때문에 제어할 DOM이 없음
  -- useRef 훅을 이용해서 앞으로 렌더링이 될 컴포넌트를 미리 참조 가능

  -- useRef 가상돔 참조 뿐만 아니라 특정 변수값을 참조도 가능
  -- 기본 변수는 해당 컴포넌트가 재랜더링이 일어날때마다 값이 같이 초기화 되기 때문에 변수값이 계속 유지가 안됨
  -- 이때 useRef에 특정 값을 참조해놓으면 특정 state값이 변경되서 해당 컴포넌트가 재 랜더링이 되더라도 참조된 변수값이 유지됨
*/
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

