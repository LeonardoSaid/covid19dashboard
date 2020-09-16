import * as types from './types';

export const brazilConfirmedRequest = (): types.BrazilConfirmedRequest => ({
  type: 'brazilConfirmedRequest',
});

export const brazilConfirmedSuccess = (payload: object[]): types.BrazilConfirmedSuccess => ({
  type: 'brazilConfirmedSuccess',
  payload,
});

export const brazilRecoveredRequest = (): types.BrazilRecoveredRequest => ({
  type: 'brazilRecoveredRequest',
});

export const brazilRecoveredSuccess = (payload: object[]): types.BrazilRecoveredSuccess => ({
  type: 'brazilRecoveredSuccess',
  payload,
});

export const brazilDeathsRequest = (): types.BrazilDeathsRequest => ({
  type: 'brazilDeathsRequest',
});

export const brazilDeathsSuccess = (payload: object[]): types.BrazilDeathsSuccess => ({
  type: 'brazilDeathsSuccess',
  payload,
});

export const brazilRecoveredError = (): types.BrazilRecoveredError => ({
  type: 'brazilRecoveredError',
});

export const brazilConfirmedError = (): types.BrazilConfirmedError => ({
  type: 'brazilConfirmedError',
});

export const brazilDeathsError = (): types.BrazilDeathsError => ({
  type: 'brazilDeathsError',
});

export const stateSearchRequest = (): types.StateSearchRequest => ({
  type: 'stateSearchRequest'
});

export const stateSearchError = (): types.StateSearchError => ({
  type: 'stateSearchError'
});

export const stateSearchSuccess = (payload: object | null | undefined): types.StateSearchSuccess => ({
  type: 'stateSearchSuccess',
  payload
});