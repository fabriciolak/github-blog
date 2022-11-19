import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const ProfileContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 864px;
    min-height: 13.25rem;

    margin: -90px auto 0 auto;
    padding: 36px 32px;

    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 1rem 2rem;

    border-radius: 10px;
    background-color: ${theme['base-profile']};
  `}

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 8px;
`

export const ProfileHeader = styled.header`
  width: 100%;
  height: 1.9375rem;
  display: flex;
  justify-content: space-between;

  z-index: 999;

  strong {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.6;
  }

  @media (max-width: 720px) {
    margin-top: 1rem;
  }
`

export const ProfileBio = styled.p`
  height: 52px;
  margin: 0.5rem 0 1.4375rem 0;
  line-height: 1.6;
`

export const ProfileList = styled.ul`
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

export const ProfileFooterButton = styled.a`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem;

    display: none;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background-color: ${darken(0.1, theme.blue)};
    color: #fff;

    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    text-decoration: none;

    border-radius: 8px;

    cursor: pointer;

    :hover {
      color: ${darken(0.1, '#FFF')};
      transition: border-bottom-color 0.2s, color 0.2s;
    }

    @media (max-width: 560px) {
      display: flex;
    }
  `}
`
