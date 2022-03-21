import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider, QueryClientConfig } from 'react-query';

type ChildrenType = JSX.Element | React.FC | null;

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
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryProvider;
