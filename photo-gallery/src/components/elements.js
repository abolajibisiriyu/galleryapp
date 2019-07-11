import styled, { css } from "styled-components";

export const ControlContainer = styled.div`
  width: 100%;
  max-width: 1040px;
  display: flex;
  ${({ type }) =>
    type &&
    type === "header" &&
    css`
      justify-content: flex-end;
      align-items: center;
    `}
  ${({ type }) =>
    type &&
    type === "content" &&
    css`
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      max-width: 1070px;
    `}
`;

export const Button = styled.button`
  padding: 8px 15px;
  background-color: blue;
  color: #ffffff;
`;
