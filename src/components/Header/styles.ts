import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: relative;

  width: 100%;
  height: 18.5rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderBackground = styled.div`
  position: absolute;
  inset: 0;

  z-index: -1;

  img {
    width: 100%;
    height: 18.5rem;
    object-fit: cover;
  }
`

export const HeaderLogo = styled.img`
  margin-top: -4rem;
`
