import styled, { css } from 'styled-components';

const KleinerKreis= styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50px;
  display: inline-block;

  ${props => props.kraft && css`
      background: #7A8778;
    `};

  ${props => props.cardio && css`
    background: #939C91;
    `};

  ${props => props.koord && css`
    background: #BBC8B9;
  `};

  ${props => props.beweg && css`
    background: #D2DDD0;
    ;
  `};
`;

export default KleinerKreis;