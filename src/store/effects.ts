import { ThunkAction } from 'redux-thunk';
import { ApplicationState, ApplicationAction } from './types';
import * as brazilAPI from '../services/brazilAPI';
import moment from 'moment';
import {
  brazilConfirmedRequest,
  brazilConfirmedSuccess,
  brazilDeathsRequest,
  brazilDeathsSuccess,
  brazilRecoveredRequest,
  brazilRecoveredSuccess,
  brazilConfirmedError,
  brazilDeathsError,
  brazilRecoveredError
} from './actions';

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export const loadBrazilConfirmed = (): Effect => (dispatch, getState) => {
  const toDate = moment().format('YYYY-MM-DD') + "T00:00:00.000Z";
  const fromDate = moment().subtract(1, 'day').format('YYYY-MM-DD') + "T00:00:00.000Z";
  dispatch(brazilConfirmedRequest());
  return brazilAPI.loadBrazilStatusConfirmed(fromDate, toDate)
    .then(arr => dispatch(brazilConfirmedSuccess(arr)))
    .catch(() => dispatch(brazilConfirmedError()));
};

export const loadBrazilRecovered = (): Effect => (dispatch, getState) => {
  const toDate = moment().format('YYYY-MM-DD') + "T00:00:00.000Z";
  const fromDate = moment().subtract(1, 'day').format('YYYY-MM-DD') + "T00:00:00.000Z";
  dispatch(brazilRecoveredRequest());
  return brazilAPI.loadBrazilStatusRecovered(fromDate, toDate)
    .then(arr => dispatch(brazilRecoveredSuccess(arr)))
    .catch(() => dispatch(brazilRecoveredError()));
};

export const loadBrazilDeaths = (): Effect => (dispatch, getState) => {
  const toDate = moment().format('YYYY-MM-DD') + "T00:00:00.000Z";
  const fromDate = moment().subtract(1, 'day').format('YYYY-MM-DD') + "T00:00:00.000Z";
  dispatch(brazilDeathsRequest());
  return brazilAPI.loadBrazilStatusDeaths(fromDate, toDate)
    .then(arr => dispatch(brazilDeathsSuccess(arr)))
    .catch(() => dispatch(brazilDeathsError()));
};