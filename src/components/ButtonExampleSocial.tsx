import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleSocial = () => (
  <div>
    <Button color="facebook">
      <Icon name="facebook" /> Facebook
    </Button>
    <Button>
      <Icon name="linkedin" /> LinkedIn
    </Button>
    <Button color="linkedin">
      <Icon name="linkedin" />
    </Button>
    <Button>
      <Icon name="github" /> Github
    </Button>
  </div>
)

export default ButtonExampleSocial
