import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query';
import {
  createContext,
  useContext,
  useState,
  forwardRef,
  ReactNode
} from 'react';

const QueryContext = createContext<{
  isLoading: boolean;
  error: unknown;
  data: Record<string, any>;
} | null>(null);

const queryClient = new QueryClient();
export function QueryProvider({ children }: { children: ReactNode }) {
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export function useQueryContext() {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error('useSnackbar must be used within SnackbarProvider');
  }
  return context;
}
