import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

export default class SectionBrowser extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <>
        <Menu attached="top" tabular>
          <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick} />
          <Menu.Item name="projects" active={activeItem === 'projects'} onClick={this.handleItemClick} />
          <Menu.Item name="blog" active={activeItem === 'blog'} onClick={this.handleItemClick} />
        </Menu>

        <Segment attached="bottom">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
            justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
            eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
            laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Segment>
      </>
    )
  }
}
