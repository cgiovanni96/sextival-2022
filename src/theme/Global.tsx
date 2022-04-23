import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Global = createGlobalStyle`
    ${reset};

    body{ 
        background-color: ${(styled) => styled.theme.palette.red[0]};
        font-family: ${(styled) => styled.theme.typo.family.main}
    }
`;
