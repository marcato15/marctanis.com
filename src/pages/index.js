import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { media } from '../style-utils'

import Card from '../components/Card'

const date = Math.floor(
  (new Date() - new Date('09/01/2004')) / (60 * 60 * 24 * 365 * 1000),
)

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;

  p {
    max-width: 720px;
    margin: 1.5em auto;
  }
`

const CardWrapper = styled.div`
  margin: 1em auto;
  display: flex;
  flex-wrap: wrap;
  > * {
    width: calc(50% - 1em);
    margin: 0.5em;
    font-size: 0.9em;
    ${media.handheld`
        width: calc(50% - .5em);
        margin: 0.25em;
          `};
  }
`

const IndexPage = () => (
  <Wrapper>
    <h2>Introduction</h2>
    <p>
      I've been crafting amazing experiences on the web for the last {date}+
      years. I speak fluent Javascript, Node JS, PHP, Go, Docker, AWS, NoSQL,
      MySQL and am conversant with many other languages (Ruby on Rails, Python,
      Swift, R).
    </p>
    <p>
      I love challenges that force me to grow and learn new things. I have yet
      to meet a challenge I can't overcome with the right combination of
      intuition, research and sheer brute force.
    </p>
    <h2>Skills</h2>
    <CardWrapper>
      <Card>
        <h3>Javascript</h3>
        <p>
          I've been writing Javascript for the past 10 years and as of late it
          has become my go-to language. Wether it's building out a React Single
          Page Application, squeezing performance out of a node backend server,
          or writing an extension or module for that random Javscript framework
          over there, I love it all.
        </p>
        <p>
          <strong>Frameworks and Tools:</strong> React, Redux, Backbone, jQuery,
          Express, Rivets, ES6+, Webpack, Babel.
        </p>
      </Card>
      <Card>
        <h3>APIs</h3>
        <p>
          One of my absolute favorite things to do on the web is to work with
          API's. I don't care if it's creating or consuming them, I just love
          the structured approach to slinging data across the web. I've consumed
          APIs to do just about anything and built a wide variatey of APIs
          myself.
        </p>
        <p>
          <strong>Keywords:</strong> RESTful, HATEOAS, GraphQL.
        </p>
      </Card>
      <Card>
        <h3>DevOps</h3>
        <p>
          Beautiful working front ends are nothing without the right hardware to
          support it. I've been wrangling servers, debugging gnarly server
          problems at all hours of the days for the last decade. Once our server
          fleet got big enough, I switched to managing the fleet automatically
          through a variety of configuration tools. Now I can sit back when a
          production server goes down and watch as my system takes care of the
          problem servers automatically with no down time for the end users.
        </p>
        <p>
          <strong>Software and Tools:</strong> Ubuntu, CentOS, Bash, Apache,
          NGINX, AWS, GCloud, Docker, Puppet.{' '}
        </p>
      </Card>
      <Card>
        <h3>PHP</h3>
        <p>
          PHP was my first love. While flashier tools have come out, I still
          find myself needing to crawl back under the hood and optizime PHP all
          the time for the various applications and CMS's I manage. Wether it's
          managing Content Managment Systems, small and large, building out
          modules and extensions, firing up a microservice or developing full
          fledged apps, I've handled whatever challenge has come my way with
          this trusty tool.
        </p>
        <p>
          <strong>Frameworks and Tools:</strong> Laravel, CodeIgniter,
          Wordpress, Craft CMS, Zend Framework, Slim.
        </p>
      </Card>
      <Card>
        <h3>Databases</h3>
        <p>
          Databases are everywhere, and no two are the same. While I got started
          normalizing MySQL databases, I've since branched out into all
          variations of databases, from Microsoft SQL to just about every
          variation of NoSQL. Wether or optimizing that misbehaving query or
          setting things up write so that later late night optimization session
          isn't necessary, I'm not afraid of what challenge a databse will throw
          at me next.
        </p>
      </Card>
      <Card>
        <h3>Front End Development</h3>
        <p>
          Taking mockups from clients and designers is what I have done since
          the very first day I got into web programming. The web has come a long
          way since 2004 and I've been able to add quite a few tools to my
          toolbelt in that time. My favorite advancement by far is responsive
          design, I just love taking a design and seeing it come to life in a
          browser.
        </p>
        <p>
          <strong>Frameworks and Tools:</strong> SASS, Less, Bootstrap, BEM,
          SMACSS, Neat{' '}
        </p>
      </Card>
      <Card>
        <h3>Go</h3>
        <p>
          While it took me a little while to wrap my head around go, I've come
          to love it. Now I'm constantly looking for the next excuse to use it.
          I've built some command line applications as well as REST API's in it
          and am ready to use it for whatever challenge comes up next.
        </p>
      </Card>
      <Card>
        <h3>Machine Learning</h3>
        <p>
          It's hard to go anywhere these days without hearing about Machine
          Learning, especially in programming circles. This is why I am
          currently enrolled in a Stanford class on Machine learning and
          building out applications on the side using dozens of data points to
          try to predict the future.
        </p>
      </Card>
    </CardWrapper>
    <h2>Open Source Libraries</h2>
    <p>
      I have benefited so much from the open source community and love to give
      back when I can. I contribute to a couple open source libraries.
    </p>
    <h4>
      <a href="https://github.com/horseman/horseman">Horseman</a>
    </h4>
    <p>
      A collection of components to help facilitate connecting React Single Page
      Applications with Headless CMS's.
    </p>
    <h4>
      <a href="https://github.com/zealotdeploy/zealot">Zealot Deploy</a>
    </h4>
    <p>
      Tooling built around AWS's ECS service that allows quickly spinning up an
      entire container infrastructure for staging and production that will
      integrate with any build tool. It allows dynamic subdomain branches to
      allow unlimted staging branches, as well as can enable self-healing and
      auto-scaling policies.
    </p>
    <h2>Resume</h2>
    <p>
      I try to keep my resume up to date. Here's the most recent version of{' '}
      <a href="/MarcTanisResume.pdf">my resume.</a>
    </p>
  </Wrapper>
)

export default IndexPage
