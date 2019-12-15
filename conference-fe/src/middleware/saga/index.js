  
import { put, call, takeEvery, all } from "redux-saga/effects";
import * as types from "../../const";
import { REQUEST, SUCCESS } from "../../const/requests";
import * as services from "../../services/api";

function* getConferences(data) {
  const payload = yield call(() => services.getConferences(data.payload));
  yield put({ type: types.CONFERENCES[SUCCESS], payload });
}

function* startToGetConferences(data) {
  yield takeEvery(
    types.CONFERENCES[REQUEST], getConferences);
}

export default function* rootSaga() {
  yield all([
    startToGetConferences(),
  ]);
}