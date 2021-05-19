import React from 'react';
import styled from 'styled-components';

const Namen= styled.p`
  margin: 0;
  padding: 0;
`;

function Name(props) {
    return(
        <Namen>{props.name}</Namen>
        );
};

export default Name;