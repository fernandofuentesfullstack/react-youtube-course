import style from "styled-components";

export const Button = style.button`
  width: ${(props) => (props.large ? '500px' : '200px')};
  height: 50px;
  color: white;
  font-size: 15px;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  margin: 10px;
  background-color: ${(props) => props.color};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.darkColor};
  }
`;
