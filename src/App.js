import './scss/style.scss';
import Header from './component/Header';
import Footer from './component/Footer';

/*
  JSX : HTML문법과 비슷하게 동적으로 DOM을 생성해주는 문법 체계 (가상DOM :VirtualDOM)
  Component : JSX를 통해서 특정 기능을 하는 가상DOM구조를 재활용 가능하게 함수형태로 패키징
*/

function App() {
  return (
    <div className="App">  
      <Header />

      <section>
        <article>1</article>
        <article>2</article>
        <article>3</article>
      </section>

      <Footer />
    </div>
  );
}

export default App;
