import { Action } from 'redux';

export interface LoadingState {
  brazilData: {
    confirmed: boolean,
    recovered: boolean,
    deaths: boolean
  };
}

export interface ApplicationState {
  loading: LoadingState;
  brazilData: {
      confirmed: Array<object>,
      recovered: Array<object>,
      deaths: Array<object>
  };
}

// action.types

export interface BrazilConfirmedRequest extends Action {
  type: 'brazilConfirmedRequest';
}

export interface BrazilRecoveredRequest extends Action {
  type: 'brazilRecoveredRequest';
}

export interface BrazilDeathsRequest extends Action {
  type: 'brazilDeathsRequest';
}

export interface BrazilConfirmedSuccess extends Action {
  type: 'brazilConfirmedSuccess';
  payload: Array<object>;
}

export interface BrazilRecoveredSuccess extends Action {
  type: 'brazilRecoveredSuccess';
  payload: Array<object>;
}

export interface BrazilDeathsSuccess extends Action {
  type: 'brazilDeathsSuccess';
  payload: Array<object>;
}

export type ApplicationAction =
  | BrazilConfirmedRequest
  | BrazilRecoveredRequest
  | BrazilDeathsRequest
  | BrazilConfirmedSuccess
  | BrazilRecoveredSuccess
  | BrazilDeathsSuccess;