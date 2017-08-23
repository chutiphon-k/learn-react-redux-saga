import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import { Provider } from 'react-redux';

import Counter from './Counter'
// import reducer from './reducers'
import rootReducer from './reducers'
import rootSaga  from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

// const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Counter />
     </Provider>
    ,document.getElementById('root')
  )
}

render()
// store.subscribe(render)
