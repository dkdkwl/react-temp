import React from 'react';
//public폴더의 절대 경로값
const path = process.env.PUBLIC_URL;

//비구조하 할당으로 해당 객체의 값을 바로 키값으로 전달가능
function Article(props) { 
  console.log(props);  
  return (
    <article>      
      <h2>{props.data}</h2>
      {/* public폴더까지의 절대경로를 불러와서 그 뒤에 props로 전달받은 이미지명을 이용해 이미지 소스 url완성 */}
      <img src={`${path}/img/${props.data}.jpg`} />
    </article>
  )
}

export default Article;