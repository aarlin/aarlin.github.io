import React from 'react'
import { Button, ButtonGroup, Icon, Popup } from 'semantic-ui-react'
import { Link } from '@reach/router'

const SocialMediaButtons = () => (
  // TODO: Add mouseover icon to turn blue
  <>
    <ButtonGroup widths="4" basic size="medium">
      <Popup
        content="LinkedIn"
        key="linkedin"
        size="mini"
        position="bottom center"
        trigger={
          <Button as={Link} to="https://www.linkedin.com/in/aaron-lin-44123a15a/">
            <Button.Content visible>
              <Icon name="linkedin" />
            </Button.Content>
          </Button>
        }
      />

      <Popup
        content="GitHub"
        key="github"
        size="mini"
        position="bottom center"
        trigger={
          <Button as={Link} to="https://github.com/aarlin" animated="fade">
            <Button.Content hidden>
              <Icon name="github" />
            </Button.Content>
            <Button.Content visible>
              <Icon name="github alternate" />
            </Button.Content>
          </Button>
        }
      />

      <Popup
        content="Mail"
        key="mail"
        size="mini"
        position="bottom center"
        trigger={
          <Button animated="fade">
            <Button.Content visible>
              <Icon name="envelope" />
            </Button.Content>
            <Button.Content hidden>
              <Icon name="envelope open" />
            </Button.Content>
          </Button>
        }
      />

      <Popup
        content="Resume"
        key="resume"
        size="mini"
        position="bottom center"
        trigger={
          <Button>
            <Button.Content visible>
              <Icon name="file alternate" />
            </Button.Content>
          </Button>
        }
      />
    </ButtonGroup>
  </>
)

export default SocialMediaButtons
