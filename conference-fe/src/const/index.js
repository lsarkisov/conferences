import { REQUEST, SUCCESS, FAILURE } from "./requests";
                               
function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;  
    return acc;                
  }, {});
} 

export const CONFERENCES = createRequestTypes("CONFERENCES");
export const RESERVE_CONFERENCE_PAGE = 'RESERVE_CONFERENCE_PAGE';
export const ROOMS = createRequestTypes("ROOMS");
export const SAVE_CONFERENCE = createRequestTypes("SAVE_CONFERENCE");
export const REMOVE_CONFERENCE = createRequestTypes("REMOVE_CONFERENCE");
