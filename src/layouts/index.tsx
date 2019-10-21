import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'
import '../semantic/semantic.less'

import { Container, Grid } from 'semantic-ui-react'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import Page from '../components/Page'
import ServiceMessage from '../components/ServiceMessage'
import BorderedImage from '../components/BorderedImage'
import SectionBrowser from '../components/SectionBrowser'
import SocialMediaButtons from '../components/SocialMediaButtons'
import Education from '../components/Education'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        />
        <LayoutMain>
          <Page>
            <Container fluid>
              <ServiceMessage />
              <Grid stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <BorderedImage />
                    <SocialMediaButtons />
                    <Education />
                  </Grid.Column>
                  <Grid.Column width={13}>
                    <SectionBrowser>{children}</SectionBrowser>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}></Grid.Column>
                </Grid.Row>
                <Grid.Row width={3}></Grid.Row>
              </Grid>
            </Container>
          </Page>
        </LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
