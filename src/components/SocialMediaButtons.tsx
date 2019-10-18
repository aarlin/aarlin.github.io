import React from 'react'
import { Button, ButtonGroup, Icon, Popup, SemanticICONS } from 'semantic-ui-react'
import { Link } from 'gatsby'

const socialMedia: { content: string; key: string; to: string; icon: SemanticICONS }[] = [
  {
    content: 'LinkedIn',
    key: 'linkedin',
    to: 'https://www.linkedin.com/in/aaron-lin-44123a15a/',
    icon: 'linkedin'
  },
  {
    content: 'GitHub',
    key: 'github',
    to: 'https://github.com/aarlin',
    icon: 'github'
  },
  {
    content: 'Mail',
    key: 'mail',
    to: 'mailto:aaronlin256@gmail.com',
    icon: 'mail'
  },
  {
    content: 'Resume',
    key: 'resume',
    to: '/aaron_lin.pdf',
    icon: 'file alternate'
  }
]

const SocialMediaButtons = () => (
  // TODO: Add mouseover icon to turn blue
  // TODO: Turn into horizontal buttons if mobile
  <>
    <ButtonGroup widths="4" basic size="medium">
      {socialMedia.map(media => {
        return (
          <Popup
            content={media.content}
            key={media.key}
            size="mini"
            position="bottom center"
            trigger={
              <Button as="a" to={media.to}>
                <Button.Content visible>
                  <Icon name={media.icon} />
                </Button.Content>
              </Button>
            }
          />
        )
      })}
      />
    </ButtonGroup>
  </>
)

export default SocialMediaButtons
