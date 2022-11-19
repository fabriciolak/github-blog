import { Link } from 'react-router-dom'

import { darken } from 'polished'
import styled, { css } from 'styled-components'

const LinkBase = css`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${theme.blue};
    text-decoration: none;

    border-bottom: 2px solid transparent;

    cursor: pointer;

    :hover {
      color: ${darken(0.1, theme.blue)};
      border-bottom-color: ${darken(0.1, theme.blue)};
      transition: border-bottom-color 0.2s, color 0.2s;
    }

    z-index: 9999;

    @media (max-width: 560px) {
      display: none;
    }
  `}
`

export const LinkContainer = styled(Link)`
  ${LinkBase}
`

export const ExternalLinkContainer = styled.a`
  ${LinkBase}
`
