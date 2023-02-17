// import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import { addNumber, minusNumber } from './redux/modules/counter'




function App() {

  // 화면렌더링될때 작동할떄 훅 의존성배열이 [numberInput] 이 바뀌면 렌더링 
  // 반배열을 두면 [numberInput] 이 변경되어도 
  // useEffect(() => {
  //   console.log(numberInput)
  // }, [numberInput])



  // 리덕스 안에있는 데이터를 컴포넌트로 가져오려면 어떠한 로직이 필요로하는데 
  // 그떄 사용하는것이 리덕스 훅 useSelector 

  // 여기서 state는 중앙저장소에 있는 모든 값들을 의미
  const data = useSelector((state) => {

    return state.counter.number;
  })

  console.log(data)

  // payload로 값 보내기 위한 훅 
  const dispatch = useDispatch();


  return (
    <>

      <div className="App">
        현재카운터 {data}
      </div>



      <button onClick={(() => {
        dispatch(addNumber(1))
      }
      )}> +</button>


      <button onClick={(() => {

        dispatch(minusNumber(1))
      })}> - </button>




    </>
  );
}

export default App;
