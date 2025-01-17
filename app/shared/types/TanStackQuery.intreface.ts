import { UseQueryOptions } from '@tanstack/react-query';

export type QueryOptionsType<TData, TError = unknown> = Omit<
  UseQueryOptions<TData, TError, TData>,
  'queryKey' | 'queryFn'
>;
