import React from 'react'
import { Menu, Segment, Container, Header } from 'semantic-ui-react'
import { Link } from 'gatsby'

const SectionBrowser: React.FC = ({ children }) => {
  return (
    <>
      <Menu attached="top" tabular>
        <Menu.Item as={Link} activeClassName="active" exact="true" to="/" name="blog" />
        <Menu.Item as={Link} activeClassName="active" exact="true" to="/about" name="about" />
      </Menu>

      <Segment raised attached="bottom">
        {children}
      </Segment>
    </>
  )
}

export default SectionBrowser
