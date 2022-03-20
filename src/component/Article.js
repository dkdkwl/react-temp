import React from 'react';
const path = process.env.PUBLIC_URL;

function Article(props) {  
  //props로 전달받은 값을 활용하여 각 article에 적용될  style객체를 생성하고
  const style = {transform: `rotate(${props.deg*props.idx}deg) translateY(-200%)`, opacity: 0.8, } 

  return (
    //컴포넌트에 style객체 적용
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