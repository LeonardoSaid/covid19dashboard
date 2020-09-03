import {
  BrazilConfirmedRequest,
  BrazilConfirmedSuccess,
  BrazilRecoveredRequest,
  BrazilRecoveredSuccess,
  BrazilDeathsRequest,
  BrazilDeathsSuccess,
  BrazilConfirmedError,
  BrazilDeathsError,
  BrazilRecoveredError
} from './types';

export const brazilConfirmedRequest = (): BrazilConfirmedRequest => ({
  type: 'brazilConfirmedRequest',
});

export const brazilConfirmedSuccess = (payload: object[]): BrazilConfirmedSuccess => ({
  type: 'brazilConfirmedSuccess',
  payload,
});

export const brazilRecoveredRequest = (): BrazilRecoveredRequest => ({
  type: 'brazilRecoveredRequest',
});

export const brazilRecoveredSuccess = (payload: object[]): BrazilRecoveredSuccess => ({
  type: 'brazilRecoveredSuccess',
  payload,
});

export const brazilDeathsRequest = (): BrazilDeathsRequest => ({
  type: 'brazilDeathsRequest',
});

export const brazilDeathsSuccess = (payload: object[]): BrazilDeathsSuccess => ({
  type: 'brazilDeathsSuccess',
  payload,
});

export const brazilRecoveredError = (): BrazilRecoveredError => ({
  type: 'brazilRecoveredError',
});

export const brazilConfirmedError = (): BrazilConfirmedError => ({
  type: 'brazilConfirmedError',
});

export const brazilDeathsError = (): BrazilDeathsError => ({
  type: 'brazilDeathsError',
});