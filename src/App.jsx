import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import { ZERO_ONE } from './redux/modules/counter'
import { minusOne, } from './redux/modules/counter'
import { plusN, minus_N } from './redux/modules/counter'



function App() {
  const [numberInput, setNumberInput] = useState(0);


  // 화면렌더링될때 작동할떄 훅 
  useEffect(() => {
    console.log(numberInput)
  }, [numberInput])



  // 리덕스 안에있는 데이터를 컴포넌트로 가져오려면 어떠한 로직이 필요로하는데 
  // 그떄 사용하는것이 리덕스 훅 useSelector 

  // 여기서 state는 중앙저장소에 있는 모든 값들을 의미
  const data = useSelector((state) => {
    return state.counter;
  })


  const dispatch = useDispatch();


  return (
    <>

      <div className="App">
        현재카운터 {data.number}
      </div>

      <input type="number"
        value={numberInput}
        onChange={((e) => {
          // +를 넣으면 자동형 변환을 해준다
          setNumberInput(+e.target.value)
        })} />

      <button onClick={(() => {
        dispatch(plusN(numberInput))

      }
      )}> +</button>


      <button onClick={(() => {
        // dispatch({
        //   type: MINUS_ONE,
        // })
        dispatch(minus_N(numberInput))
      })}> - </button>


      <button onClick={(() => {

        dispatch({
          type: ZERO_ONE,
        })

      })}>ZERO</button>


    </>
  );
}

export default App;
