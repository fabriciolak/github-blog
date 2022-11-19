import { Link } from 'react-router-dom'

import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { CardContainer, CardContent, CardHeader } from './styles'

interface CardData {
  number: number
  title: string
  createdAt: Date
  body: string
}

export function Card({ title, createdAt, body, number }: CardData) {
  return (
    <CardContainer>
      <CardHeader>
        <strong>
          <Link to={`/post/${number}`}>
            {title} {number}
          </Link>
        </strong>
        <span>
          {formatDistanceToNow(createdAt, {
            addSuffix: true,
            locale: ptBr,
          })}
        </span>
      </CardHeader>
      <CardContent>{body}</CardContent>
    </CardContainer>
  )
}
