import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Navigation from '../Navigation'

const NavigationWrapper = styled.div`
  max-width: 600px;
`
const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.0875rem;
  display: flex;
  justify-content: space-between;
`
const Header = () => (
  <div
    style={{
      background: '#F79E27',
      marginBottom: '1.45rem',
    }}
  >
    <HeaderWrapper>
      <Title />
      <Navigation />
    </HeaderWrapper>
  </div>
)

export default Header
