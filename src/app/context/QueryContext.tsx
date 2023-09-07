import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query';

const queryClient = new QueryClient();

export function QueryProvider({ children }) {
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
