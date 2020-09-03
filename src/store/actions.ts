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

export const brazilConfirmedSuccess = (payload: Array<object>): BrazilConfirmedSuccess => ({
  type: 'brazilConfirmedSuccess',
  payload,
});

export const brazilRecoveredRequest = (): BrazilRecoveredRequest => ({
  type: 'brazilRecoveredRequest',
});

export const brazilRecoveredSuccess = (payload: Array<object>): BrazilRecoveredSuccess => ({
  type: 'brazilRecoveredSuccess',
  payload,
});

export const brazilDeathsRequest = (): BrazilDeathsRequest => ({
  type: 'brazilDeathsRequest',
});

export const brazilDeathsSuccess = (payload: Array<object>): BrazilDeathsSuccess => ({
  type: 'brazilDeathsSuccess',
  payload,
});