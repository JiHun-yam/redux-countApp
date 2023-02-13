


// store == 중앙 데이터 관리소 
import counter from '../modules/counter'
import { createStore } from 'redux'
import { combineReducers } from 'redux'

// 파라미터안에는 객체형태로 키 값으로 들어간다 
const rootReducer = combineReducers({
    counter: counter,
})

const store = createStore(rootReducer)


export default store;