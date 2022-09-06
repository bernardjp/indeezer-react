import { Image } from '@mantine/core';
import { openModal } from '@mantine/modals';

type ModalImagePropType = {
  imageURL: string,
  alt: string
}

function useModalImage(props: ModalImagePropType) {
  const { imageURL, alt } = props;
  const modalSettings = {
    title: '',
    children: (
      <Image
        alt={alt}
        src={imageURL}
        withPlaceholder
      />
    )
  };

  const modalHandler = () => openModal(modalSettings);

  return modalHandler;
}

export default useModalImage;
