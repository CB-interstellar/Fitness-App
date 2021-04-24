import styled from 'styled-components';


const Button = styled.button`
  background-color: ${props => props.theme.bbcolors.blue};
  border-radius: 50px;
  border: none;
  color: white;
  text-decoration: none;
  font-size: 16px;
  line-height: 21px;
  margin: 13px 0;
  padding: 12px 25px;
  display: block;
`;


const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Button;
export {BtnBox};