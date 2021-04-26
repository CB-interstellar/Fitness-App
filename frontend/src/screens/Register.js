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

const SimpleLink= styled(LinkStyled)`
  font-size: 16px;
  line-height: 21px;
  margin: 13px 0;
  padding: 12px 25px;
`;

function Register() {
    return(
      <div>
        <div>
          <YogaImg src={Yoga1} alt="Yoga Graphik" />
        </div>
        <BtnBox>
          <Button as={Link} to="/register-1">registrieren</Button>
          <SimpleLink to="/login">oder anmelden</SimpleLink>
        </BtnBox>
      </div>
    );
};

export default Register;