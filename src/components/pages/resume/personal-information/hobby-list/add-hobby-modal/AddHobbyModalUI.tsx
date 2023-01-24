import {FC} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import {AddHobbyModalProps} from './AddHobbyModal.types';

const AddHobbyModalUI: FC<AddHobbyModalProps> = ({closeModal, addHobby, inputHobbyNameRef}) => <div
  className="modal show"
  style={{ display: 'block', position: 'initial' }}
>
  <Modal.Dialog>
    <Modal.Header>
      <Modal.Title>Ajouter un hobby</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nom du hobby</Form.Label>
          <Form.Control type="hobby" ref={inputHobbyNameRef} />
        </Form.Group>
      </Form>
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={closeModal} variant="secondary">Annuler</Button>
      <Button onClick={addHobby} variant="primary">Ajouter</Button>
    </Modal.Footer>
  </Modal.Dialog>
</div>;

export default AddHobbyModalUI;