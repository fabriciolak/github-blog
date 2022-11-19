import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { BadgeIcon } from '../../../../components/BadgeIcon'
import { Link } from '../../../../components/Link'
import {
  ProfileBio,
  ProfileContainer,
  ProfileContent,
  ProfileFooterButton,
  ProfileHeader,
  ProfileImage,
  ProfileList,
} from './styles'

interface ProfileProps {
  login?: string
  avatarUrl?: string
  company?: string | null
  followers?: number
  htmlUrl?: string
  bio?: string
}

export function Profile({
  login,
  avatarUrl,
  bio,
  company,
  followers,
  htmlUrl,
}: ProfileProps) {
  return (
    <ProfileContainer>
      <ProfileImage src={avatarUrl} alt="" />
      <ProfileContent>
        <ProfileHeader>
          <strong>{login}</strong>
          <Link
            external
            target="_blank"
            rel="noopener noreferrer"
            to={`${htmlUrl}`}
          >
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x" />
          </Link>
        </ProfileHeader>

        <ProfileBio>{bio}</ProfileBio>
        <ProfileList>
          <BadgeIcon icon={faGithub}>{login}</BadgeIcon>
          {company && <BadgeIcon icon={faBuilding}>{company}</BadgeIcon>}
          <BadgeIcon icon={faUserGroup}>{followers} seguidores</BadgeIcon>
          <ProfileFooterButton href="#">
            {login}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x" />
          </ProfileFooterButton>
        </ProfileList>
      </ProfileContent>
    </ProfileContainer>
  )
}
