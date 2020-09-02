import { ApplicationState, ApplicationAction } from './types';

export const initialState: ApplicationState = {
  loading: {
    brazilData: {
      confirmed: false,
      recovered: false,
      deaths: false
    }
  },
  brazilData: {
    confirmed: [],
    recovered: [],
    deaths: []
  }
}

const reducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case "brazilConfirmedRequest":
      return {
        ...state,
        loading: {
          ...state.loading,
          brazilData: {
            ...state.loading.brazilData,
            confirmed: true
          }
        }
      };
    case "brazilConfirmedSuccess":
      return {
        ...state,
        loading: {
          ...state.loading,
          brazilData: {
            ...state.loading.brazilData,
            confirmed: false
          }
        },
        brazilData: {
          ...state.brazilData,
          confirmed: action.payload
        }
      };
    default:
      return state;
  }
}

export default reducer;