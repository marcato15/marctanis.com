import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: block;
  font-weight: bold;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  margin-top: 0.1em;
`

const Title = () => <StyledLink to="/">Marc Tanis</StyledLink>

export default Title
