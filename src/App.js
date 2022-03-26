import './scss/style.scss';
import Header from './component/Header';
import Footer from './component/Footer';
import Section from './component/Section';
import { useState, useRef } from 'react';

export default function App() {
	let [num, setNum] = useState(0);
	let frame = useRef(null);

	const movePrev = () => {
		setNum(++num);
		console.log(num);
		frame.current.style = `transform: rotate(${45 * num}deg)`;
	};

	const moveNext = () => {
		setNum(--num);
		console.log(num);
		frame.current.style = `transform: rotate(${45 * num}deg)`;
	};

	return (
		<>
			<Header />
			<Section frame={frame} />
			<Footer />

			<div className='prev' onClick={movePrev}></div>
			<div className='next' onClick={moveNext}></div>
		</>
	);
}

/*
1. react 컴포넌트 함수 생성 
rfce 입력후 엔터 react functional component export 

2. 부모컴포넌트에서 import로 해당 컴포넌트 불러옴

3. 컴포넌트안의 코드 작성 순서
-- hook (useState, useRef, useEffect)
-- 대입형 기능 함수
-- return JSX구문

4. 부모컴포넌트에서 자식컴포넌트 값을 전달
-- prop이라는 키값을 생성해서 원하는 값을 {}감싸서 전달
-- 자식 컴포넌트 함수에서 props인수롤 객체로 묶임 값들을 전달 받음
-- 비구조할당으로 키값을 바로 파라미터명으로 받을 수 있음
-- 가상DOM에 직접 이벤트 연결
-- 가상DOM을 참조해야 될떄 useRef를 활용

5. useState
-- 가상DOM의 렌더링에 관여하는 중요한 정보값을 담을 state생성 hook
-- const [스테이트, 스테이트변경함수] = useState(초기값);
-- state값이 변경될때마다 해당 컴포넌트 함수가 재실행되면서 화면이 재 렌더링됨
-- state값을 무조건 state변경함수로만 변경 가능

6. useRef
-- 특정 가상돔을 참조할때 쓰임
-- const 변수 = useRef(초기값)  {current: 초기값}
-- 참고하고 싶은 컴포넌트의 ref속성을 만들고 위에 만들어진 객체를 대입

7. 특정가상돔을 반복처리할때는 무조건 key속성에 고유값을 담아서 렌더링

*/
