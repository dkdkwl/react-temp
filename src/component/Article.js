import React from 'react';
const path = process.env.PUBLIC_URL;

function Article(props) {  
  //적용할 스타일을 객체로 선언
  const style = {transform: 'rotate(45deg)', opacity: 0.5} 
  return (
    // 적용할 가상DOM에 인라인으로 연결
    <article style={style}>      
      <div className='inner'>
        <h2>{props.data}</h2>

        <div className='pic'>
          <img src={`${path}/img/${props.data}.jpg`} />
        </div>
      </div>
    </article>
  )
}

export default Article;