import { ApplicationState, ApplicationAction } from './types';

export const initialState: ApplicationState = {
  loading: {
    users: false,
  },
  users: [],
}

const reducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case "loadUsersRequest":
      return {
        ...state,
        loading: {
          ...state.loading,
          users: true
        }
      };
    case "loadUsersSuccess":
      return {
        ...state,
        users: action.users,
        loading: {
          ...state.loading,
          users: false
        }
      };
    case "loadUsersError":
      return {
        ...state,
        loading: {
          ...state.loading,
          users: false
        }
      };
    default:
      return state;
  } 
}

export default reducer;