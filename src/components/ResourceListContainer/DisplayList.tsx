import { Container } from '@mantine/core';
import { ResourceDataList } from '../../types/CardDisplay.types';

type DisplayListPropType = {
  dataList: ResourceDataList,
  CardComponent: React.ElementType
}

function DisplayList(props: DisplayListPropType) {
  const { dataList, CardComponent } = props;

  return (
    <Container>
      {dataList.map((item) => <CardComponent data={item} key={item.id} />)}
    </Container>
  );
}

export default DisplayList;
