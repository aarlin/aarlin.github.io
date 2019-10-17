import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink, BrowserRouter } from 'react-router-dom'

const SectionBrowser: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Menu attached="top" tabular>
        <Menu.Item as={NavLink} exact to="/about" name="about" />
        <Menu.Item as={NavLink} to="/projects" name="projects" />
        <Menu.Item as={NavLink} to="/blog" name="blog" />
      </Menu>

      <Segment attached="bottom">{children}</Segment>
    </BrowserRouter>
  )
}

export default SectionBrowser
