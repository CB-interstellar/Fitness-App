import React from 'react';
import { Link } from 'react-router-dom';
import Button, { BtnBox} from "../components/Button";
import LinkStyled from '../components/LinkStyled';
import styled from 'styled-components';
import Yoga1 from '../icons/Yoga1.svg';

const YogaImg =styled.img`
  margin: 110px 0 24px 0;
  width: 100vw;
  `;

function Register() {
    return(
      <div>
        <div>
          <YogaImg src={Yoga1} alt="Yoga Graphik" />
        </div>
        <BtnBox>
          <Button as={Link} to="/register-1">registrieren</Button>
          <LinkStyled to="/login">oder anmelden</LinkStyled>
        </BtnBox>
      </div>
    );
};

export default Register;