// 초기 상태값 (state)
const initalState = {
    number: 0
}
// const [number, setNumber] = useState(0) 와 동일  ?

// 리듀서 : 'state에 변화를 일으키는' 함수 
// 1. state를 action의 type에 따라 변경하는 함수 
// input : state와 action 를 받는다 
const counter = (state = initalState, action) => {
    switch (action.type) {
        default:
            return state;
    }

}


export default counter;