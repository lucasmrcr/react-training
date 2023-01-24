import React, {FC} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import PersonalInformation from './personal-information/PersonalInformation';
import Abstract from './Abstract';
import FormationList from './formation-list/FormationListBase';
import SkillList from './SkillList';
import ExperienceListBase from './experience-list/ExperienceListBase';

const Resume: FC = () => <Container>
  <Row>
    <Col md={3}>
      <PersonalInformation />
    </Col>
    <Col md={9}>
      <Abstract />
      <ExperienceListBase />
      <FormationList />
      <SkillList />
    </Col>
  </Row>
</Container>;

export default Resume;