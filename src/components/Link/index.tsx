import { ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

import { ExternalLinkContainer, LinkContainer } from './styles'

interface LinkComponentProps extends LinkProps {
  children: ReactNode
  external?: boolean
}

export function Link({ children, external, to, ...rest }: LinkComponentProps) {
  return (
    <>
      {external ? (
        <ExternalLinkContainer {...rest} href={`${to}`}>
          {children}
        </ExternalLinkContainer>
      ) : (
        <LinkContainer to={to} {...rest}>
          {children}
        </LinkContainer>
      )}
    </>
  )
}
