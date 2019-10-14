import * as React from 'react'
import { Link } from 'gatsby'

import ButtonExampleSocial from '../components/ButtonExampleSocial'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import ButtonExampleCircularSocial from '../components/ButtonExampleCircularSocial'
import ServiceMessage from '../components/ServiceMessage'
import BorderedImage from '../components/BorderedImage'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <ServiceMessage />
        <BorderedImage />
        <Link to="/page-2/">Go to page 2</Link>
        <ButtonExampleSocial />
        <ButtonExampleCircularSocial />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
