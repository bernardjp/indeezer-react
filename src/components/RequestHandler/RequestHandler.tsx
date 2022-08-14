import { useQuery } from '@tanstack/react-query';
import * as PropTypes from 'prop-types';
import StyledLoader from '../Utils/StyledLoader';

type RequestHandlerPropType = {
  queryOptions: string,
  queryCallback: Function,
  RenderComponent: React.FC<any>
}

RequestHandler.propTypes = {
  queryOptions: PropTypes.string,
  queryCallback: PropTypes.func.isRequired,
  RenderComponent: PropTypes.elementType.isRequired
};

function RequestHandler(props: RequestHandlerPropType) {
  const { queryOptions, queryCallback, RenderComponent } = props;
  const { isLoading, error, data } = useQuery(['deezer', queryOptions], () => queryCallback(queryOptions));

  return (
    <>
      {isLoading && <StyledLoader isLoading={isLoading} />}
      {error && <div>Error!</div>}
      {data && <RenderComponent data={data} />}
    </>
  );
}

export default RequestHandler;
