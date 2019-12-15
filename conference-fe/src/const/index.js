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
