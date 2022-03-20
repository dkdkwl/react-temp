import React, { useState } from 'react';
import Article from './Article';

/*
  리액트로 화면 개발이 효율적인 이유
  -컴포넌트로 화면이 구성됨
  -재사용 가능한 화면을 컴포넌트 단위로 재활용가능
  -모든 컴포넌트들이 state라는 정보값에 따라서 자동으로 화면이 재 랜더링

  리액트 컴포넌트 요소에 이벤트 연결
  JSX구문 안에서 직접 이벤트 핸들러 함수 연결

  useState는 배열을 반환 [정보값을 저장하는 state, 해당state를 변경할 수 있는 함수]
  useState state를 생성하고 해당 state값은 무조건 setState로만 변경 가능
*/

function Section() {
  const arr = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers'];
  const [data, setData] = useState(arr);  

  return (
    <>
      <section className='wrap'>
        {/* state값이 변경이 일어나면 자동으로 해당 컴포넌트는 재 랜더링 발생 */}
        {data.map((data, idx)=>{
          return <Article key={idx} data={data} />
        })}
      </section>
    </>
  )
}

export default Section;