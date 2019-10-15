import * as React from 'react'
import { Link } from 'gatsby'

import { Grid } from 'semantic-ui-react'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import ButtonExampleCircularSocial from '../components/SocialMediaButtons'
import ServiceMessage from '../components/ServiceMessage'
import BorderedImage from '../components/BorderedImage'
import DividerLabel from '../components/DividerLabel'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <ServiceMessage />
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <BorderedImage />
            </Grid.Column>
            <Grid.Column width={13}>
              <DividerLabel label="Experience" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <ButtonExampleCircularSocial />
            </Grid.Column>
            <Grid.Column width={13}>
              <DividerLabel label="Projects" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column width={13}>
              <DividerLabel label="Blog" />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
