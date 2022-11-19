import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import {
  SearchFormContainer,
  SearchFormHeader,
  SearchFormInput,
} from './styles'

const searchInputSchema = z.object({
  query: z.string(),
})

type SearchInputType = z.infer<typeof searchInputSchema>

interface SearchFormProps {
  comments: number
  searchPost: (query?: string) => Promise<void>
}

export function SearchForm({ comments, searchPost }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchInputType>({
    resolver: zodResolver(searchInputSchema),
  })

  async function handleSearchPost(data: SearchInputType) {
    await searchPost(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPost)}>
      <SearchFormHeader>
        <h2>Publicações</h2>
        <p>
          {comments} {comments > 2 ? 'publicações' : 'publicação'}
        </p>
      </SearchFormHeader>

      <SearchFormInput
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </SearchFormContainer>
  )
}
