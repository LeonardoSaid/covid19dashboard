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
    case "brazilRecoveredRequest":
      return {
        ...state,
        loading: {
          ...state.loading,
          brazilData: {
            ...state.loading.brazilData,
            recovered: true
          }
        }
      };
    case "brazilRecoveredSuccess":
      return {
        ...state,
        loading: {
          ...state.loading,
          brazilData: {
            ...state.loading.brazilData,
            recovered: false
          }
        },
        brazilData: {
          ...state.brazilData,
          recovered: action.payload
        }
      };
    case "brazilDeathsRequest":
      return {
        ...state,
        loading: {
          ...state.loading,
          brazilData: {
            ...state.loading.brazilData,
            deaths: true
          }
        }
      };
    case "brazilDeathsSuccess":
      return {
        ...state,
        loading: {
          ...state.loading,
          brazilData: {
            ...state.loading.brazilData,
            deaths: false
          }
        },
        brazilData: {
          ...state.brazilData,
          deaths: action.payload
        }
      };
    default: return state;
  }
}

export default reducer;