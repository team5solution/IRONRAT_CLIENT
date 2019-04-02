
import {SEND_CANDIDATE} from "./types";

export const sendCandidate = candidates => {
    dispatch({ type: SEND_CANDIDATE, payload: candidates });
};
