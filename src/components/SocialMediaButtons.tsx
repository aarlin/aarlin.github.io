import React from 'react'
import { Button, ButtonGroup, Icon } from 'semantic-ui-react'

const SocialMediaButtons = () => (
  <>
    <ButtonGroup basic size="small">
      <Button animated>
        <Button.Content visible>
          <Icon name="linkedin" />
        </Button.Content>
        <Button.Content hidden> LinkedIn</Button.Content>
      </Button>
      <Button animated="vertical">
        <Button.Content hidden>Github</Button.Content>
        <Button.Content visible>
          <Icon name="github" />
        </Button.Content>
      </Button>
      <Button animated="fade">
        <Button.Content visible>
          <Icon name="mail" />
        </Button.Content>
        <Button.Content hidden>Mail</Button.Content>
      </Button>
    </ButtonGroup>
  </>
)

export default SocialMediaButtons
