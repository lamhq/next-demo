/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Reducer } from 'react';

interface LoadingState<T> {
  loading: boolean;
  error?: Error;
  data?: T;
}

interface LoadOptions {
  // if set to true, fetcher function won't be called automatically
  delay: boolean;

  // whether to throw exception when async function is rejected
  // exception: false;
}

interface Action<T> {
  type: 'start' | 'load-finish' | 'load-error';
  data?: T;
  error?: Error;
}

type Fetcher<T> = (...arg: any[]) => Promise<T>;

function init<T>(options: LoadOptions): LoadingState<T> {
  const initialState = {
    data: undefined,
    error: undefined,
    loading: !options.delay,
  };
  return initialState;
}

function reducer<T>(state: LoadingState<T>, action: Action<T>): LoadingState<T> {
  switch (action.type) {
    case 'start':
      return { loading: true, data: undefined, error: undefined };

    case 'load-finish':
      return { loading: false, data: action.data, error: undefined };

    case 'load-error':
      return { loading: false, data: undefined, error: action.error };

    default:
      throw new Error('unrecognized dispatch action');
  }
}

/**
 * React hook that manage loading state for async function
 *
 * @param {Function} fn
 */
export default function useLoadingState<T>(
  fn: Fetcher<T>,
  options: Partial<LoadOptions> = {},
): { load: Fetcher<T> } & LoadingState<T> {
  const opt: LoadOptions = {
    delay: false,
    ...options,
  };
  const [state, dispatch] = React.useReducer<Reducer<LoadingState<T>, Action<T>>, LoadOptions>(
    reducer,
    opt,
    init,
  );

  const load: Fetcher<T> = async (...params) => {
    try {
      // dispatch start loading event if function was
      // not called automatically or it's not the first run
      if (opt.delay || state.data !== null) {
        dispatch({ type: 'start' });
      }

      const res = await fn(...params);
      dispatch({ type: 'load-finish', data: res });
      return res;
    } catch (err) {
      dispatch({ type: 'load-error', error: err });
      throw err;
    }
  };

  return {
    ...state,
    load,
  };
}
