import {FC} from 'react';
import styled from 'styled-components';

const AbstractContainer = styled.div`
  height: 15vh;
  background-color: blue;
`;

const Abstract: FC = () => <AbstractContainer></AbstractContainer>;

export default Abstract;