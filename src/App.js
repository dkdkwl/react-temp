import './scss/style.scss';
import Header from './component/Header';
import Footer from './component/Footer';
import Section from './component/Section';
/*
  JSX : HTML문법과 비슷하게 동적으로 DOM을 생성해주는 문법 체계 (가상DOM :VirtualDOM)
  Component : JSX를 통해서 특정 기능을 하는 가상DOM구조를 재활용 가능하게 함수형태로 패키징
  fragment : 복수개의 가상DOM을 태그를 추가하지 않고 그룹화 시켜서 내볼떄
*/

function App() {
  

  return (    
      <>
        <Header /> 
        <Section />
        <Footer />  
      </>
  );
}

export default App;
