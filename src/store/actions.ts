import {
  BrazilConfirmedRequest,
  BrazilConfirmedSuccess,
  BrazilRecoveredRequest,
  BrazilRecoveredSuccess,
  BrazilDeathsRequest,
  BrazilDeathsSuccess
} from './types';

export const brazilConfirmedRequest = (): BrazilConfirmedRequest => ({
  type: 'brazilConfirmedRequest',
});

export const brazilConfirmedSuccess = (payload: Array<Object>): BrazilConfirmedSuccess => ({
  type: 'brazilConfirmedSuccess',
  payload,
});

export const brazilRecoveredRequest = (): BrazilRecoveredRequest => ({
  type: 'brazilRecoveredRequest',
});

export const brazilRecoveredSuccess = (payload: Array<Object>): BrazilRecoveredSuccess => ({
  type: 'brazilRecoveredSuccess',
  payload,
});

export const brazilDeathsRequest = (): BrazilDeathsRequest => ({
  type: 'brazilDeathsRequest',
});

export const brazilDeathsSuccess = (payload: Array<Object>): BrazilDeathsSuccess => ({
  type: 'brazilDeathsSuccess',
  payload,
});