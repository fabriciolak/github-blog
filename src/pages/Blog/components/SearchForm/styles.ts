import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 864px;
  margin: 4.5rem auto 3rem auto;
`

export const SearchFormHeader = styled.header`
  width: 100%;
  height: 1.8125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-span']};
  }
`

export const SearchFormInput = styled.input`
  width: 100%;
  margin-top: 0.75rem;
  padding: 1rem 0.75rem;

  color: #fff;

  outline: none;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  background-color: ${(props) => props.theme['base-input']};
`
