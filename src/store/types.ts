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
      confirmed: Array<Object>,
      recovered: Array<Object>,
      deaths: Array<Object>
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
  payload: Array<Object>;
}

export interface BrazilRecoveredSuccess extends Action {
  type: 'brazilRecoveredSuccess';
  payload: Array<Object>;
}

export interface BrazilDeathsSuccess extends Action {
  type: 'brazilDeathsSuccess';
  payload: Array<Object>;
}

export type ApplicationAction =
  | BrazilConfirmedRequest
  | BrazilRecoveredRequest
  | BrazilDeathsRequest
  | BrazilConfirmedSuccess
  | BrazilRecoveredSuccess
  | BrazilDeathsSuccess;