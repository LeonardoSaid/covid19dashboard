import produce from 'immer';
import { ApplicationState, ApplicationAction } from './types';

export const initialState: ApplicationState = {
  loading: {
    brazilData: {
      confirmed: false,
      recovered: false,
      deaths: false,
      stateSearch: false
    }
  },
  brazilData: {
    confirmed: [],
    recovered: [],
    deaths: [],
    stateSearch: null
  }
}

const reducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case "brazilConfirmedRequest":
      return produce(state, draft => {
        draft.loading.brazilData.confirmed = true;
      });
    case "brazilConfirmedSuccess":
      return produce(state, draft => {
        draft.loading.brazilData.confirmed = false;
        draft.brazilData.confirmed = action.payload;
      });
    case "brazilRecoveredRequest":
      return produce(state, draft => {
        draft.loading.brazilData.recovered = true;
      });
    case "brazilRecoveredSuccess":
      return produce(state, draft => {
        draft.loading.brazilData.recovered = false;
        draft.brazilData.recovered = action.payload;
      });
    case "brazilDeathsRequest":
      return produce(state, draft => {
        draft.loading.brazilData.deaths = true;
      });
    case "brazilDeathsSuccess":
      return produce(state, draft => {
        draft.loading.brazilData.deaths = false;
        draft.brazilData.deaths = action.payload;
      });
    case "brazilRecoveredError":
      return produce(state, draft => {
        draft.loading.brazilData.recovered = false;
      });
    case "brazilConfirmedError":
      return produce(state, draft => {
        draft.loading.brazilData.confirmed = false;
      });
    case "brazilDeathsError":
      return produce(state, draft => {
        draft.loading.brazilData.deaths = false;
      });
    case "stateSearchRequest":
      return produce(state, draft => {
        draft.loading.brazilData.stateSearch = true;
      });
    case "stateSearchSuccess":
      return produce(state, draft => {
        draft.loading.brazilData.stateSearch = false;
        draft.brazilData.stateSearch = action.payload;
      });
    case "stateSearchError":
      return produce(state, draft => {
        draft.loading.brazilData.stateSearch = false;
      });
    default: return state;
  }

}

export default reducer;