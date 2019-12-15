import {
  ROOMS,
} from '../../const';
import { SUCCESS, FAILURE } from "../../const/requests";

function sortRoomsByFloor(all) {
  const first = all.filter(room => room.floor === "FIRST");
  const second = all.filter(room => room.floor === "SECOND");

  return {first, second}
}

const rooms = (state = {}, action) => {
  switch (action.type) {
    case ROOMS[SUCCESS]:
      return Object.assign(
        {}, state, {
          all: sortRoomsByFloor(action.payload),
        },
      );
    case ROOMS[FAILURE]:
      return Object.assign(
        {}, state, {
          rooms: null,
        },
      );
    default:
      return Object.assign(
        {}, state,
      );
  }
};

export default rooms;
