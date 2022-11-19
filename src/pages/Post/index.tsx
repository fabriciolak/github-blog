import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import Markdown from 'markdown-to-jsx'

import { BadgeIcon } from '../../components/BadgeIcon'
import { Link } from '../../components/Link'
import { api } from '../../lib/axios'
import {
  PostContainer,
  PostContent,
  PostHeader,
  PostHeaderLinks,
  PostList,
  PostTitle,
} from './styles'

interface GithubIssue {
  title?: string
  login?: string
  body?: string
  createdAt?: Date
  comments?: number
}

export function Post() {
  const [issue, setIssue] = useState<GithubIssue>({})

  const { id } = useParams()

  const fetchIssueData = useCallback(async () => {
    const { data } = await api.get(
      `/repos/fabriciolak/github-blog/issues/${id}`,
    )
    setIssue({
      ...data,
      login: data.user.login,
      createdAt: new Date(data.created_at),
    })
  }, [id])

  useEffect(() => {
    fetchIssueData()
  }, [fetchIssueData])

  return (
    <PostContainer>
      <PostHeader>
        <PostHeaderLinks>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} size="1x" />
            Voltar
          </Link>
          <Link
            external
            target="_blank"
            to={`https://github.com/fabriciolak/github-blog/issues/${id}`}
          >
            Ver no GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x" />
          </Link>
        </PostHeaderLinks>

        <PostTitle>{issue.title}</PostTitle>

        <PostList>
          <BadgeIcon icon={faGithub} size="1x">
            {issue.login}
          </BadgeIcon>
          <BadgeIcon icon={faCalendarDay} size="1x">
            {issue.createdAt &&
              formatDistanceToNow(issue.createdAt, {
                addSuffix: true,
                locale: ptBr,
              })}
          </BadgeIcon>
          <BadgeIcon icon={faComment} size="1x">
            {issue.comments}{' '}
            {issue.comments && issue.comments > 2
              ? 'comentários'
              : 'comentário'}
          </BadgeIcon>
        </PostList>
      </PostHeader>

      <PostContent>
        {issue.body && <Markdown>{issue.body}</Markdown>}
      </PostContent>
    </PostContainer>
  )
}
