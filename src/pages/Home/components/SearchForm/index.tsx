import { SearchFormContainer } from './styles'

export const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Buscar conteúdo" />
      <button hidden type="submit">
        Buscar
      </button>
    </SearchFormContainer>
  )
}
