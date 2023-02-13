import { useSelector } from 'react-redux';
import './App.css';

function App() {

  // 리덕스 안에있는 데이터를 컴포넌트로 가져오려면 어떠한 로직이 필요로하는데 
  // 그떄 사용하는것이 리덕스 훅 useSelector 

  // 여기서 state는 중앙저장소에 있는 모든 값들을 의미
  const data = useSelector((state) => {
    return state.counter
  })
  console.log(data['number'])



  return (
    <div className="App">

    </div>
  );
}

export default App;
