import React from 'react'
import styled, { css } from 'styled-components'
import stickyProvider from '../../containers/StickyProvider'

import Title from './Title'
import Navigation from '../Navigation'

const NavigationWrapper = styled.div`
  max-width: 600px;
`
const HeaderWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  background: #f79e27;
  justify-content: space-between;
`
const HeaderContainer = styled.div`
  background: #f79e27;
  border-bottom: 1px solid #999;
  margin-bottom: 1.45rem;
  padding: 1rem 1.0875rem;
  ${({ sticky }) =>
    sticky &&
    css`
      padding: 0.3em 1em;
    `};
`
const Header = ({ sticky }) => (
  <HeaderContainer sticky={sticky}>
    <HeaderWrapper>
      <Title />
      <Navigation />
    </HeaderWrapper>
  </HeaderContainer>
)

export default stickyProvider(Header)
