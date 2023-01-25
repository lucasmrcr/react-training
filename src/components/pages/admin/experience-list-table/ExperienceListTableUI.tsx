import {FC} from 'react';
import {Card, Table} from 'react-bootstrap';
import {ExperienceListTableProps} from './ExperienceListTable.types';
import CardHeader from 'react-bootstrap/CardHeader';

const ExperienceListTableUI: FC<ExperienceListTableProps> = ({experiences, deleteExperience}) => <Card>
  <CardHeader>Liste des experiences</CardHeader>
  <Card.Body>
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>#</th>
        <th>Nom</th>
        <th>Société</th>
        <th>Période</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {experiences && experiences.map(experience => <tr>
          <td>{experience.id}</td>
          <td>{experience.name}</td>
          <td>{experience.host}</td>
          <td>{experience.period}</td>
          <td>
            <a href="" onClick={() => deleteExperience(experience.id ?? '')}>Supprimer</a>
          </td>
        </tr>
      )}
      </tbody>
    </Table>
  </Card.Body>
</Card>;

export default ExperienceListTableUI;