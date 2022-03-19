import React from 'react';
import Article from './Article';

/*
  react 단방향 데이터 전달방식 (부모->자식)
  부모컴포넌트에서 자식 컴포넌트에 prop으로 원하는 데이터를 전달
  자식컴포넌트에서는 props라는 객체로 해당 데이터를 전달 받는
*/


function Section() {
  const arr = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers'];

  return (
    <section>
      {arr.map((data, idx)=>{
        return <Article key={idx} data={data}/>
      })}
    </section>
  )
}

export default Section;