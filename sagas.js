import { delay } from 'redux-saga'
import { put, takeEvery, all, call, takeLatest, fork } from 'redux-saga/effects'

export function* helloSaga() {
	console.log('Hello Sagas!')
}

export function* incrementAsync () {
	yield call(delay, 1000)
	yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync () {
	yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
	yield all([
		helloSaga(),
		watchIncrementAsync()
	])
}
