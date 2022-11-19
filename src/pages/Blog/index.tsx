import { useCallback, useEffect, useState } from 'react'

import { api } from '../../lib/axios'
import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, CardGrid } from './styles'

type GithubProfile = {
  [key: string]: any
  login?: string
  avatarUrl?: string
  company?: string | null
  followers?: number
  htmlUrl?: string
  bio?: string
  number?: number
}

type GithubIssue = {
  id: number
  body: string
  title: string
  createdAt: Date
  number: number
}

interface GithubIssueData {
  id: number
  body: string
  title: string
  created_at: Date
  number: number
}

interface GithubData {
  items: GithubIssueData[]
}

export function Blog() {
  const [issues, setIssues] = useState<GithubIssue[]>([])

  const [profile, setProfile] = useState<GithubProfile>({})

  const searchProfile = useCallback(async () => {
    const { data } = await api.get('/users/fabriciolak')

    setProfile({
      login: data.login,
      company: data.company,
      avatarUrl: data.avatar_url,
      htmlUrl: data.html_url,
      bio: data.bio,
      followers: data.followers,
      number: data.number,
    })
  }, [])

  const searchIssue = useCallback(async () => {
    const { data } = await api.get<GithubData>(
      '/search/issues?q=repo:fabriciolak/github-blog',
    )

    setIssues(
      data.items.map((issue) => ({
        ...issue,
        id: issue.id,
        number: issue.number,
        createdAt: new Date(issue.created_at),
      })),
    )
  }, [])

  useEffect(() => {
    searchIssue()
    searchProfile()
  }, [searchIssue, searchProfile])

  return (
    <BlogContainer>
      <Profile {...profile} />
      <SearchForm />

      <CardGrid>
        {issues.map((item) => (
          <Card
            key={item.id}
            body={item.body}
            title={item.title}
            createdAt={item.createdAt}
            number={item.number}
          />
        ))}
      </CardGrid>
    </BlogContainer>
  )
}
