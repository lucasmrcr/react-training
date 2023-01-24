import {FC} from 'react';
import {Breadcrumb, Card, Col, Container, ListGroup, Row, Tab, TabContainer} from 'react-bootstrap';
import AddExperienceFormBase from './add-experience-form/AddExperienceFormBase';
import ExperienceListTableBase from './experience-list-table/ExperienceListTableBase';

const Admin: FC = () => <Container>
  <Row>
    <Col>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Admin</Breadcrumb.Item>
      </Breadcrumb>
    </Col>
  </Row>
  <Row>
    <Col>
      <TabContainer id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#list-experience">
                Liste des expériences
              </ListGroup.Item>
              <ListGroup.Item action href="#add-experience">
                Ajouter une expérience
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#list-experience">
                <ExperienceListTableBase />
              </Tab.Pane>
              <Tab.Pane eventKey="#add-experience">
                <AddExperienceFormBase />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </TabContainer>
    </Col>
  </Row>
</Container>;

export default Admin;