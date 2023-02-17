// store == 중앙 데이터 관리소 
import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux'
// import { combineReducers } from 'redux'
import counter from '../modules/counter';


// ASIS : 일반 리듀서 
// const rootReducer = combineReducers({
//     counter: counter,
// })

// const store = createStore(rootReducer)

//  -------------------------------------------------
//  TODO : Reudx Tolikit 
// 객체 안에는 리듀서가 들어간다 (이 폴더에서는 counter.js )

const store = configureStore({
    // key : value 형태로 객체
    reducer: {
        counter: counter,
    }
});



export default store;