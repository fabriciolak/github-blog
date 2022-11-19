import {
  SearchFormContainer,
  SearchFormHeader,
  SearchFormInput,
} from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <h2>Publicações</h2>
        <p>6 publicações</p>
      </SearchFormHeader>

      <SearchFormInput type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
