import { GET_PROFILE, ERROR_PROFILE, CLEAR_PROFILE, UPDATE_PROFILE} from '../actions/types';
const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
}

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case ERROR_PROFILE:
      return {
        ...state,
        error: payload,
        loading: false
      }
      case CLEAR_PROFILE:
        return {
          ...state,
          profile: null,
          loading: false,
          repose: []
        }
    default:
        return state;
  }
}