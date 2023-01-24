import {FC} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import AddExperienceFormBase from './add-experience-form/AddExperienceFormBase';

const Admin: FC = () => <Container>
  <Row>
    <Col>
      <h2>Admin</h2>
    </Col>
  </Row>
  <Row>
    <Col>
      <AddExperienceFormBase />
    </Col>
  </Row>
</Container>;

export default Admin;