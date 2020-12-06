import { Action } from 'redux';

export interface LoadingState {
  brazilData: {
    confirmed: boolean,
    recovered: boolean,
    deaths: boolean,
    stateSearch: boolean
  };
}

export interface ApplicationState {
  loading: LoadingState;
  brazilData: {
      confirmed: object[],
      recovered: object[],
      deaths: object[],
      stateSearch: object | null | undefined
  };
}

//request
export interface BrazilConfirmedRequest extends Action {
  type: 'brazilConfirmedRequest';
}

export interface BrazilRecoveredRequest extends Action {
  type: 'brazilRecoveredRequest';
}

export interface BrazilDeathsRequest extends Action {
  type: 'brazilDeathsRequest';
}

export interface StateSearchRequest extends Action {
  type: 'stateSearchRequest';
}

//success
export interface BrazilConfirmedSuccess extends Action {
  type: 'brazilConfirmedSuccess';
  payload: object[];
}

export interface BrazilRecoveredSuccess extends Action {
  type: 'brazilRecoveredSuccess';
  payload: object[];
}

export interface BrazilDeathsSuccess extends Action {
  type: 'brazilDeathsSuccess';
  payload: object[];
}

export interface StateSearchSuccess extends Action {
  type: 'stateSearchSuccess';
  payload: object | null | undefined;
}

//error
export interface BrazilConfirmedError extends Action {
  type: 'brazilConfirmedError';
}

export interface BrazilRecoveredError extends Action {
  type: 'brazilRecoveredError';
}

export interface BrazilDeathsError extends Action {
  type: 'brazilDeathsError';
}

export interface StateSearchError extends Action {
  type: 'stateSearchError';
}

export type ApplicationAction =
  | BrazilConfirmedRequest
  | BrazilRecoveredRequest
  | BrazilDeathsRequest
  | BrazilConfirmedSuccess
  | BrazilRecoveredSuccess
  | BrazilDeathsSuccess
  | BrazilConfirmedError
  | BrazilRecoveredError
  | BrazilDeathsError
  | StateSearchRequest
  | StateSearchSuccess
  | StateSearchError