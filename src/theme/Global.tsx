import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Global = createGlobalStyle`
    body { 
        background-color: ${(styled) => styled.theme.palette.red[0]};
        font-family: ${(styled) => styled.theme.typo.family.main};
        font-size: ${({ theme }) => theme.typo.size.base};
        color: ${({ theme }) => theme.typo.color};

        width: 100vw;
        height: 100vh;
        padding-bottom: 2rem;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
