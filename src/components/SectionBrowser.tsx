import React, { Component, Children } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { Link } from '@reach/router'

interface SectionBrowserState {
  activeItem: string
}

export default class SectionBrowser extends Component<{}, SectionBrowserState> {
  public constructor(props) {
    super(props)
    this.state = {
      activeItem: 'about'
    }
  }

  public handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  public render() {
    return (
      <>
        <Menu attached="top" tabular>
          <Menu.Item as={Link} to="/about" name="about" active={this.state.activeItem === 'about'} onClick={this.handleItemClick} />
          <Menu.Item
            as={Link}
            to="/projects"
            name="projects"
            active={this.state.activeItem === 'projects'}
            onClick={this.handleItemClick}
          />
          <Menu.Item as={Link} to="/blog" name="blog" active={this.state.activeItem === 'blog'} onClick={this.handleItemClick} />
        </Menu>

        <Segment attached="bottom">{this.props.children}</Segment>
      </>
    )
  }
}
