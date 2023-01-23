import React, {FC} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import PersonalInformation from './PersonalInformation';
import Abstract from './Abstract';
import FormationList from './FormationList';
import ExperienceList from './ExperienceList';
import SkillList from './SkillList';

const Resume: FC = () => <Container>
  <Row>
    <Col md={4}>
      <PersonalInformation />
    </Col>
    <Col md={8}>
      <Abstract />
      <FormationList />
      <ExperienceList />
      <SkillList />
    </Col>
  </Row>
</Container>;

export default Resume;