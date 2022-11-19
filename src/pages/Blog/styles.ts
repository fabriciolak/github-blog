import styled from 'styled-components'

export const BlogContainer = styled.section`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;
  z-index: 999;
`

export const CardGrid = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 820px) {
    grid-template-columns: 100%;
  }

  @media (max-width: 320px) {
    grid-template-columns: 100%;
  }
`
