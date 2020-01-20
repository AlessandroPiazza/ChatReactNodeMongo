import styled from 'styled-components';
import { darken } from 'polished'

export const Wrapper = styled.div`
  height: 100%;
  background: #F8F8FF;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
      margin: 5px 0 0;
      height: 44px;
      padding: 5px;
      background:#FF4500;
      font-weight: bold;
      color: white;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#FF4500')}
      }

`;
