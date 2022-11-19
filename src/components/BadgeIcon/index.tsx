import { ReactNode } from 'react'

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'

import { BadgeContainer } from './styles'

interface BadgeIconProps extends FontAwesomeIconProps {
  children: ReactNode
}

export function BadgeIcon({ children, ...rest }: BadgeIconProps) {
  return (
    <BadgeContainer>
      <FontAwesomeIcon {...rest} />
      <span>{children}</span>
    </BadgeContainer>
  )
}
