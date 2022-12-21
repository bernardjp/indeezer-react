// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider, QueryClientConfig } from '@tanstack/react-query';

type ChildrenType = React.ReactNode | null;

const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
};

const queryClient = new QueryClient(queryClientOptions);

function QueryProvider(props: { children: ChildrenType | ChildrenType[] }) {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      { children }
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default QueryProvider;
