import * as type from "../const";
import { REQUEST, SUCCESS, FAILURE } from "../const/requests";

function action(type, payload = {}) {
  return { type, ...payload };
}

export const getConferencesAction = {
  request: () => action(type.CONFERENCES[REQUEST]),
  success: data => action(type.CONFERENCES[SUCCESS], data),
  failure: error => action(type.CONFERENCES[FAILURE], error)
};

export const startReserveConferenceAction = id => {
  return {
    type: type.RESERVE_CONFERENCE_PAGE,
    payload: id
  }
}

export const getRoomsAction = {
  request: () => action(type.ROOMS[REQUEST]),
  success: data => action(type.ROOMS[SUCCESS], data),
  failure: error => action(type.ROOMS[FAILURE], error)
};
