import {configureStore} from '@reduxjs/toolkit'
import customreducer  from './Reducer'
const store = configureStore({
    reducer:{
        amit : customreducer
    }
})

export default store;