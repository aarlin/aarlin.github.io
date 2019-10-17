import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink, BrowserRouter } from 'react-router-dom'
import { Link } from 'gatsby'

const SectionBrowser: React.FC = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <Menu attached="top" tabular>
          <Menu.Item as={Link} activeClassName="active" to="/" name="about" />
          <Menu.Item as={Link} activeClassName="active" to="/projects" name="projects" />
          <Menu.Item as={Link} activeClassName="active" to="/blog" name="blog" />
        </Menu>
      </BrowserRouter>

      <Segment attached="bottom">{children}</Segment>
    </>
  )
}

export default SectionBrowser
