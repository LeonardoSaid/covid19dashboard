import { ThunkAction } from 'redux-thunk';
import { ApplicationState, ApplicationAction } from './types';
import * as brazilAPI from '../services/brazilAPI';
import moment from 'moment';
import * as actions from './actions';

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export const loadBrazilConfirmed = (): Effect => (dispatch, getState) => {
  const toDate = moment().format('YYYY-MM-DD') + "T00:00:00.000Z";
  const fromDate = moment().subtract(1, 'day').format('YYYY-MM-DD') + "T00:00:00.000Z";
  dispatch(actions.brazilConfirmedRequest());
  return brazilAPI.loadBrazilStatusConfirmed(fromDate, toDate)
    .then(arr => dispatch(actions.brazilConfirmedSuccess(arr)))
    .catch(() => dispatch(actions.brazilConfirmedError()));
};

export const loadBrazilRecovered = (): Effect => (dispatch, getState) => {
  const toDate = moment().format('YYYY-MM-DD') + "T00:00:00.000Z";
  const fromDate = moment().subtract(1, 'day').format('YYYY-MM-DD') + "T00:00:00.000Z";
  dispatch(actions.brazilRecoveredRequest());
  return brazilAPI.loadBrazilStatusRecovered(fromDate, toDate)
    .then(arr => dispatch(actions.brazilRecoveredSuccess(arr)))
    .catch(() => dispatch(actions.brazilRecoveredError()));
};

export const loadBrazilDeaths = (): Effect => (dispatch, getState) => {
  const toDate = moment().format('YYYY-MM-DD') + "T00:00:00.000Z";
  const fromDate = moment().subtract(1, 'day').format('YYYY-MM-DD') + "T00:00:00.000Z";
  dispatch(actions.brazilDeathsRequest());
  return brazilAPI.loadBrazilStatusDeaths(fromDate, toDate)
    .then(arr => dispatch(actions.brazilDeathsSuccess(arr)))
    .catch(() => dispatch(actions.brazilDeathsError()));
};

export const loadStateSearch = (uf:string, date:string): Effect => (dispatch, getState) => {
  // get date and state
  dispatch(actions.stateSearchRequest());
  return brazilAPI.loadStateSearch(date)
    .then(json => {
      // needs some validation/proofing here
      const data = json.data.find((state:any) => state.uf === uf);
      dispatch(actions.stateSearchSuccess(data));
    })
    .catch(() => dispatch(actions.stateSearchError()));
};