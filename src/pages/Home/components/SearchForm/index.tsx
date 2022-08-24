import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormContainer } from './styles'
import { useContext } from 'react'
import { GithubContext } from '../../../../contexts/GithubContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  const { fetchPosts } = useContext(GithubContext)

  const handleSearchPosts = async (data: SearchFormInputs) => {
    await fetchPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
      <button hidden type="submit">
        Buscar
      </button>
    </SearchFormContainer>
  )
}
