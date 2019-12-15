import {
  CONFERENCES,
} from '../../const';
import { SUCCESS, FAILURE } from "../../const/requests";

const conferences = (state = {}, action) => {
  switch (action.type) {
    case CONFERENCES[SUCCESS]:
      return Object.assign(
        {}, state, {
          conferences: action.payload,
        },
      );
    case CONFERENCES[FAILURE]:
      return Object.assign(
        {}, state, {
          conferences: null,
        },
      );
    default:
      return Object.assign(
        {}, state,
      );
  }
};

export default conferences;
