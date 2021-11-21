import Modal from 'react-modal';

export type ModalProps = {
  command: string;
  setOpen: () => void;
  afterClose: () => void;
}
export const Prompt = ({command, setOpen, afterClose}: ModalProps) => {
  return (
    <Modal isOpen={Boolean(command)} onAfterClose={afterClose} onRequestClose={setOpen}>
      <h1>{command}</h1>
    </Modal>
  );
};
