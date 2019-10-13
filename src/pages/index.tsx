import * as React from 'react'
import { Link } from 'gatsby'

import ButtonExampleSocial from '../components/ButtonExampleSocial';
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import ButtonExampleCircularSocial from '../components/ButtonExampleCircularSocial'
import ServiceMessage from '../components/ServiceMessage'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
      <ServiceMessage />
        <h1>Personal Website</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <ButtonExampleSocial />
        <ButtonExampleCircularSocial />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
