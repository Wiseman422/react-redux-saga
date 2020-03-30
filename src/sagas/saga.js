import { takeLatest, put, delay } from 'redux-saga/effects';

function* ageUpAsync() {
    console.log("age_up action");
    yield delay(1000);
    yield put({ type: 'AGE_UP_ASYNC', value: 1 });
}

export function* watchAgeUp() {
    yield takeLatest('AGE_UP', ageUpAsync);
}