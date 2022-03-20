import React from 'react'

//비구조하 할당으로 해당 객체의 값을 바로 키값으로 전달가능
function Article(props) { 
  console.log(props);  
  return (
    <article>
      <h2>{props.data}</h2>
      <img src={props.imgSrc} />
    </article>
  )
}

export default Article;