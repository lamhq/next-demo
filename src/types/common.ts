export interface DatasetQuery {
  limit?: number;
  offset?: number;
}

type ErrorValue = string | [ErrorDetails];

export interface ErrorDetails {
  [x: string]: ErrorValue;
}

export interface ErrorResponse {
  error: string;
  details?: ErrorDetails;
  message: string;
}
