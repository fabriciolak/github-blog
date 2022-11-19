import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

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
}

export function SearchForm({ comments }: SearchFormProps) {
  const [searchParams, setSearchParams] = useSearchParams()

  const searchQuery = searchParams.get('search') || ''

  const { register, watch } = useForm<SearchInputType>({
    resolver: zodResolver(searchInputSchema),
    defaultValues: {
      query: searchQuery,
    },
  })

  const search = watch('query')

  useEffect(() => {
    setSearchParams({ search })
  }, [setSearchParams, search])

  return (
    <SearchFormContainer>
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
