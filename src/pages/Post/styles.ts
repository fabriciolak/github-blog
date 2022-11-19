import styled, { css } from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const PostHeader = styled.header`
  ${({ theme }) => css`
    width: 100%;
    max-width: 864px;
    min-height: 168px;
    margin: -90px auto 0 auto;
    padding: 2rem;

    border-radius: 10px;
    background-color: ${theme['base-profile']};
  `}
`

export const PostHeaderLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 560px) {
    a {
      display: initial;
    }
  }
`

export const PostTitle = styled.h1`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;
    margin: 1.25rem auto 8px auto;
    z-index: 9999;
    color: ${theme['base-title']};
  `}
`

export const PostList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const PostContent = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 0.75rem auto;
  }

  ul {
    margin: 1rem auto;
    padding-left: 3rem;
  }

  pre {
    font-family: monospace;
    padding: 1rem;
    border-radius: 2px;
    overflow: hidden;
    background-color: ${(props) => props.theme['base-post']};
  }

  img {
    width: 100%;
  }
`
