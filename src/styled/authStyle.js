import styled from 'styled-components';
import { theme } from '../theme/theme';

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  background: ${theme.colors.darkGrey};
`;
