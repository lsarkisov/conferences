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
