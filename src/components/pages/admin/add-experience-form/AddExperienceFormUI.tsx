import {FC} from 'react';
import {Button, Form} from 'react-bootstrap';
import {AddExperienceFormProps} from './AddExperienceForm.types';

const AddExperienceFormUI: FC<AddExperienceFormProps> = ({refHost, refImage, refName, refPeriod, onClick}) => <Form>
  <h4>Ajouter une experience</h4>
  <Form.Group className="mb-3" controlId="name">
    <Form.Label>Nom</Form.Label>
    <Form.Control ref={refName} type="text" placeholder="Entrez un nom"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="host">
    <Form.Label>Indiquez le nom de la société</Form.Label>
    <Form.Control ref={refHost} type="text" placeholder="Exemple"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="period">
    <Form.Label>Indiquez la période</Form.Label>
    <Form.Control ref={refPeriod} type="text" placeholder="Indiquez la période"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="image">
    <Form.Label>Indiquez l'image de la société</Form.Label>
    <Form.Control ref={refImage} type="url" placeholder="https://example.com/image.png"/>
  </Form.Group>
  <Button onClick={onClick} variant="primary">
    Ajouter
  </Button>
</Form>;

export default AddExperienceFormUI;