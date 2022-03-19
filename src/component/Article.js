import React from 'react'

//비구조하 할당으로 해당 객체의 값을 바로 키값으로 전달가능
function Article(props) {  
  return (
    <article>{props.data}</article>
  )
}

export default Article