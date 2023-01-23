import {FC} from 'react';
import {PictureProps} from './Picture.types';
import styled from 'styled-components';

const PictureContainer = styled.img`
  width: 100%;
`;

const Picture: FC<PictureProps> = ({src, alt}) => <PictureContainer src={src} alt={alt}/>;

export default Picture;