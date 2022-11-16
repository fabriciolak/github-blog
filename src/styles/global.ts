import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :focus {
      box-shadow: 0 0 0 2px ${theme.blue};
    }

    body {
      background-color: ${theme['base-background']};
      color: ${theme['base-text']};

      -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    textarea,
    button {
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }
  `}
`
