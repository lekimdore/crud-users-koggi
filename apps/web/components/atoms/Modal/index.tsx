import { FC, ReactNode } from 'react';
import { Modal as MantineModal, ModalProps, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface Props extends ModalProps {
  children: ReactNode;
  title: string;
}

const useModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const Modal: FC<Props> = ({ children, title, ...props }) => {
    return (
      <MantineModal
        {...props}
        title={<Title order={4}>{title}</Title>}
        opened={opened}
        onClose={close}
      >
        {children}
      </MantineModal>
    );
  };

  return {
    Modal,
    isOpen: opened,
    fn: {
      open,
      close,
    },
  };
};

export default useModal;
