import React from 'react';

/*
  JSX안에서는 삼항연산자, map, 변수치환만 가능
  해당 연산이 필요한 구문은 {}로 감싸줌
*/

function Section() {
  const arr = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers'];

  return (
    <section>
      {arr.map((data, idx)=>{
        return (
          <article key={idx}>{data}</article>
        )
      })}
    </section>
  )
}

export default Section;