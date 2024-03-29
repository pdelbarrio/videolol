import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        padding: 20px 40px;
        background-color: #dedbaa;

        @media screen and (max-width: 800px) {
            padding: 10px;
            background-color: #dedbaa;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }
    * {
        box-sizing: border-box;
    }
`;
