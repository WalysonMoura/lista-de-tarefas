import styled from "styled-components";

import { Colors } from "@/styles/colors";


type TextProps = {
  isCompleted?: boolean;
};

export const Conteiner = styled.div<TextProps>`
  width: 100%;
  background: ${Colors.gray500};
  border: 1px solid ${Colors.gray400};
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  p {
    font-size: 0.875rem;
    line-height: 1.18rem;
    ${({ isCompleted }) =>
      isCompleted
        ? css`
        color: ${Colors.gray300};
        text-decoration: line-through
      `
        : css`
        color: ${Colors.gray300};
        text-decoration: none
      `}
    margin-right: auto;
  }
`;

export const CheckContainer = styled.button`
  width: 1.125rem;
  height: 1.125rem;
  background: none;
  border: none;

  div {
    width: 100%;
    height: 100%;
    border-radius: 999px;
    border: 2px solid ${Colors.blue};
  }

  svg {
    width: 100%;
    height: 100%;
    color: ${Colors.purple};
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${Colors.gray300};
`;
