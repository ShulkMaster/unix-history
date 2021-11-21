import Modal from 'react-modal';
import {CommandEvent, CommandFactory} from './CommandFactory';

export type ModalProps = {
  command: string;
  setOpen: () => void;
  afterClose: () => void;
}
export const Prompt = ({command, setOpen, afterClose}: ModalProps) => {
  return (
    <Modal
      isOpen={Boolean(command)}
      onAfterClose={afterClose}
      onRequestClose={setOpen}
      shouldFocusAfterRender={true}
    >
      <CommandFactory event={command as CommandEvent}/>
    </Modal>
  );
};
