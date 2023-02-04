import styled from "styled-components";
import { Colors } from "@/styles/colors";

export const Conteiner = styled.header`
background: ${Colors.gray700};
display: flex;
align-items: center;
justify-content: center;
height: 12.5rem;
position: relative;

`;
export const Form = styled.form`

    position: absolute;
    height: 3.375rem;
    bottom: calc(-3.375rem / 2);
    width: 100%;
    max-width: 46rem;
    display: flex;
    gap: 0.5rem;
    padding: 0 1rem;


    input {
        height: 100%;
        flex: 1;
        color: ${Colors.gray100};
        background: ${Colors.gray500};
        border: 1px solid ${Colors.gray700};
        border-radius: 0.5rem;
        padding: 0 1rem;
        font-size: 1rem;


        ::placeholder {
            color: ${Colors.gray300};
          }
      }


      button {
        height: 100%;
        padding: 0 1rem;
        background: ${Colors.blueDark};
        color: ${Colors.gray100};
        border: none;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.375rem;
        font-weight: 700;
        font-size: 0.875rem;
      }
`;
