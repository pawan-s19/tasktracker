import { Modal } from "flowbite-react";
import { GlobalState } from "../../contexts/context";
import CreateTask from "../Createtask";
import EditTask from "../Edittask";

function ModalComponent() {
  const { openModal, actionType, setOpenModal } = GlobalState();

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          {actionType === "create" ? (
            <CreateTask />
          ) : actionType === "edit" ? (
            <EditTask />
          ) : null}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;
