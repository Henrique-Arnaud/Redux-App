import React from 'react'
import { Container } from './styles'
import { UserSearch } from './UserSearch'

export const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <img src="/githubIcon.png" alt="" />

        <UserSearch />
      </div>
    </Container>
  )
}
