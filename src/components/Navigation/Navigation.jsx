import React from 'react'
import styled from 'styled-components'
import Obfuscate from 'react-obfuscate'

import { media } from '../../style-utils'
import GithubIcon from '../../assets/svg/Github'
import LinkedinIcon from '../../assets/svg/Linkedin'
import EmailIcon from '../../assets/svg/Email'

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin: 0 1em;
    display: block;
    width: 30px;

    ${media.handheld`
        margin: 0 .75em;
        width: 25px;
          `};
  }
  svg {
    width: 100%;
    height: auto;
  }
`

const Navigation = () => (
  <NavWrapper>
    <Obfuscate email="me@marctanis.com">
      <EmailIcon size="30" />
    </Obfuscate>
    <a href="https://github.com/marcato15">
      <GithubIcon size="30" />
    </a>
    <a href="https://www.linkedin.com/in/marcato15">
      <LinkedinIcon size="30" />
    </a>
  </NavWrapper>
)

export default Navigation
