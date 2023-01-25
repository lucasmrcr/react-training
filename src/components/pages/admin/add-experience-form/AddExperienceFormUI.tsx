import {FC} from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import {AddExperienceFormProps} from './AddExperienceForm.types';
import CardHeader from 'react-bootstrap/CardHeader';

const AddExperienceFormUI: FC<AddExperienceFormProps> = ({
                                                           onChangeName,
                                                           onChangePeriod,
                                                           onChangeImage,
                                                           onChangeHost,
                                                           onClick
                                                         }) =>
  <Card>
    <CardHeader>Ajouter une experience</CardHeader>
    <Card.Body>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nom</Form.Label>
          <Form.Control onChange={onChangeName} type="text" placeholder="Entrez un nom"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="host">
          <Form.Label>Indiquez le nom de la société</Form.Label>
          <Form.Control onChange={onChangeHost} type="text" placeholder="Exemple"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="period">
          <Form.Label>Indiquez la période</Form.Label>
          <Form.Control onChange={onChangePeriod} type="text" placeholder="Indiquez la période"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Indiquez l'image de la société</Form.Label>
          <Form.Control onChange={onChangeImage} type="url" placeholder="https://example.com/image.png"/>
        </Form.Group>
        <Button onClick={onClick} variant="primary">
          Ajouter
        </Button>
      </Form>
    </Card.Body>
  </Card>;

export default AddExperienceFormUI;