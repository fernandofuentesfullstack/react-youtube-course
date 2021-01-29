import style from "styled-components";

const colorRed = "red";
const colorBlue = "blue";
const colorGreen = "green";

export const ButtonRed = style.button`
  width: 200px;
  height: 50px;
  background-color: ${colorRed};
`;
export const ButtonBlue = style.button`
  width: 200px;
  height: 50px;
  background-color: ${colorBlue};
`;
export const ButtonGreen = style.button`
  width: 200px;
  height: 50px;
  background-color: ${colorGreen};
`;
