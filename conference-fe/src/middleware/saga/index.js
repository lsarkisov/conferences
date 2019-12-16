  
import { put, call, takeEvery, all } from "redux-saga/effects";
import * as types from "../../const";
import { REQUEST, SUCCESS } from "../../const/requests";
import * as services from "../../services/api";

function* removeConference(data) {
  const payload = yield call(() => services.removeConference(data.payload));
  yield put({ type: types.REMOVE_CONFERENCE[SUCCESS], payload });
}

function* startToRemoveConference(data) {
  yield takeEvery(
    types.REMOVE_CONFERENCE[REQUEST], removeConference);
}

function* saveConference(data) {
  const payload = yield call(() => services.saveConference(data.payload));
  yield put({ type: types.SAVE_CONFERENCE[SUCCESS], payload });
}

function* startToSaveConference(data) {
  yield takeEvery(
    types.SAVE_CONFERENCE[REQUEST], saveConference);
}

function* getRooms(data) {
  const payload = yield call(() => services.getRooms(data.payload));
  yield put({ type: types.ROOMS[SUCCESS], payload });
}

function* startToGetRooms(data) {
  yield takeEvery(
    types.ROOMS[REQUEST], getRooms);
}

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
    startToGetRooms(),
    startToSaveConference(),
    startToRemoveConference(),
  ]);
}