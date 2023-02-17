// // action value 

import { createSlice } from "@reduxjs/toolkit";

// // 상수로 저장해서 사용 및 app.jsx로 보내기 
// const PLUS_ONE = "counter/PLUS_ONE";
// const MINUS_ONE = "counter/MINUS_ONE"
// export const ZERO_ONE = "counter/ZERO"
// const PLUS_N = "counter/PLUS_N"
// const MINUS_N = "counter/MINUS_N"

// // // action creator : action value 를 return 하는 상수 
// // export const plueOne = () => {
// //     return {
// //         type: PLUS_ONE,
// //     }
// // }

// // export const minusOne = () => {
// //     // action 개체는 type, payload로 이루어진 객체이다 
// //     // payload 는 전달 되는 실체라고 하면 되겠다 
// //     return {
// //         type: MINUS_ONE,
// //     }
// // }

// // 인자로 페이로드값을 받아야한다
// // export const plusN = (payload) => {
// //     // app.jsx에서 저장한 값을 payload가져와서 저장 
// //     return {
// //         type: PLUS_N,
// //         payload: payload,
// //     }
// // }

// // export const minus_N = (payload) => {
// //     // app.jsx에서 저장한 값을 payload가져와서 저장 
// //     return {
// //         type: MINUS_N,
// //         payload: payload,
// //     }
// // }


// // 초기 상태값 (state)
const initialState = {
    number: 0,
};
// // const [number, setNumber] = useState(0) 와 동일  ?

// // 리듀서 : 'state에 변화를 일으키는' 함수 
// // 1. state를 action의 type에 따라 변경하는 함수 
// // input : state와 action 를 받는다 
// // action 객체라는 것은 action type 을 payload 만큼 처리하는 것이다 ! 
// // ex : payloa가 3이다. 3만큼 Plus 






// const counter = (state = initalState, action) => {
//     switch (action.type) {
//         // dispatch로 받아오게 PLUS_ONE이면
//         case PLUS_ONE:
//             // 이런식으로 하면 undefiend 뜸 객체로 키 벨류로 만들어야됨
//             return {
//                 number: state.number + 1,
//             }
//         case MINUS_ONE:
//             return {
//                 number: state.number - 1,
//             }

//         case ZERO_ONE:
//             return {
//                 number: 0
//             }

//         case PLUS_N:
//             return {
//                 // 초기값과 payload로 가져온 값만큼 합산 
//                 number: state.number + action.payload
//             }
//         case MINUS_N:
//             return {
//                 number: state.number - action.payload
//             }

//         default:
//             return state;
//     }

// }

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: '',
//     reducers: '',
// })



// export default counterSlice.reducer;
// export const { } = counterSlice.actions

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        // 하나하나의 리듀서를 의미 한다 
        addNumber: (state, action) => {
            // 불변성을 유지해야만 하는데 알아서 유지가 된다 이건
            // immer 때문이다 
            state.number = state.number + action.payload
        },
        minusNumber: (state, action) => {
            state.number = state.number - action.payload
        }
    },
});




export default counterSlice.reducer;

export const { addNumber, minusNumber } = counterSlice.actions;


