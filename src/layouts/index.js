import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import './index.css'

const BodyWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Marc Tanis - Crafting amazing experiences on the web since 2004"
      meta={[
        {
          name: 'description',
          content:
            'A self-taught web developer with 13+ years experience on the web and an insatiable desire to grow and learn new things. Fluent in Javascript, Node JS, Go, PHP, Docker, AWS, (My,No)SQL, just to name a few.',
        },
      ]}
    />
    <Header />
    <BodyWrapper>{children()}</BodyWrapper>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
