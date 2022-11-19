import styled from 'styled-components'

export const BadgeContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
