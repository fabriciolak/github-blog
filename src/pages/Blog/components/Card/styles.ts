import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 26rem;
    height: 16.25rem;

    padding: 2rem;

    border-radius: 10px;
    background-color: ${theme['base-post']};

    @media (max-width: 820px) {
      max-width: 100%;
      height: auto;
    }
  `}
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  strong {
    width: 17.6875rem;
    height: 4rem;

    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.6;

    text-overflow: ellipsis;
    overflow: hidden;

    @media (max-width: 320px) {
      width: 100%;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme['base-title']};

      :hover {
        ${({ theme }) => css`
          color: ${darken(0.1, theme['base-title'])};
        `}
      }
    }
  }

  span {
    font-size: 14px;
  }

  @media (max-width: 320px) {
    /* width: 100%; */
    flex-direction: column;
  }
`

export const CardContent = styled.p`
  height: 112px;
  overflow: hidden;
  margin: 20px auto 0 auto;
`
