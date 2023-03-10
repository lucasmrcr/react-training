import {FC} from 'react';
import styled from 'styled-components';
import {ButtonProps} from '@shared/button/Button.types';

const ButtonUI = styled.button`
`

const Button: FC<ButtonProps> = ({children, onClick}) => <ButtonUI className="btn btn-info" onClick={onClick}>
  {children}
</ButtonUI>;

export default Button;