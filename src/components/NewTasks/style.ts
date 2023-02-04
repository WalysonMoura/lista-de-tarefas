import styled, { css } from "styled-components";
import { Colors } from "@/styles/colors";
interface Props {
  textPurple?: boolean;
}
export const Conteiner = styled.section<Props>`
  width: 100%;
  max-width: 46rem;
  margin: 0 auto;
  margin-top: 5.625rem;
  padding: 0 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    p {
      
      ${({ textPurple }) =>
        textPurple
          ? css`
            color: ${Colors.purple};
          `
          : css`
            color: ${Colors.blue};
          `}
      font-size: 0.875rem;
      font-weight: 700;
    }
    span {
      background: ${Colors.gray400};
      color: ${Colors.gray200};
      padding: 3px 9px;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 700;
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Empty = styled.section`
  margin-top: 4rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${Colors.gray300};
  text-align: center;

  svg {
    opacity: 0.3;
  }

  p {
    font-weight: 700;
  }
`;
