import { ThunkAction } from 'redux-thunk';
import { ApplicationState, ApplicationAction } from './types';
import {
  brazilConfirmedRequest,
  brazilConfirmedSuccess,
  brazilDeathsRequest,
  brazilDeathsSuccess,
  brazilRecoveredRequest,
  brazilRecoveredSuccess
} from './actions';
import * as brazilAPI from '../services/brazilAPI';
import moment from 'moment';

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export const loadBrazilConfirmed = (): Effect => (dispatch, getState) => {
  const toDate = moment().format('YYYY-MM-DD') + "T00:00:00.000Z";
  const fromDate = moment().subtract(1,'day').format('YYYY-MM-DD') + "T00:00:00.000Z";
  dispatch(brazilConfirmedRequest());
  return brazilAPI.loadBrazilStatusConfirmed(fromDate, toDate)
    .then(arr => dispatch(brazilConfirmedSuccess(arr)))
    .catch((e) => console.log(e));
};