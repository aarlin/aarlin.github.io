import React from 'react'
import { Button, ButtonGroup, Icon, Popup, SemanticICONS, Responsive } from 'semantic-ui-react'
import { Link } from 'gatsby'

const socialMedia: { content: string; key: string; as: string; to: string; icon: SemanticICONS; style?: string }[] = [
  {
    content: 'LinkedIn',
    key: 'linkedin',
    as: 'a',
    to: 'https://www.linkedin.com/in/aaron-lin-44123a15a/',
    icon: 'linkedin',
    style: 'fa-linkedin'
  },
  {
    content: 'GitHub',
    key: 'github',
    as: 'a',
    to: 'https://github.com/aarlin',
    icon: 'github',
    style: 'fa-git'
  },
  {
    content: 'Mail',
    key: 'mail',
    as: 'a',
    to: 'mailto:aaronlin256@gmail.com',
    icon: 'mail'
  },
  {
    content: 'Resume',
    key: 'resume',
    as: 'a',
    to: '/aaron_lin.pdf',
    icon: 'file alternate'
  }
]

const SocialMediaButtons = () => (
  // TODO: Add mouseover icon to turn blue
  <>
    <Responsive as={ButtonGroup} maxWidth={765} widths="4" basic size="medium">
      {socialMedia.map(media => {
        return (
          <Popup
            content={media.content}
            key={media.key}
            size="mini"
            position="bottom center"
            trigger={
              <Button as={media.as} to={media.to}>
                <Icon className={media.style} name={media.icon} />
              </Button>
            }
          />
        )
      })}
    </Responsive>

    <Responsive as={ButtonGroup} minWidth={766} maxWidth={1539} vertical widths="4" basic size="medium">
      {socialMedia.map(media => {
        return (
          <Popup
            content={media.content}
            key={media.key}
            size="mini"
            position="right center"
            trigger={
              <Button as="a" href={media.to}>
                <Icon className={media.style} name={media.icon} />
              </Button>
            }
          />
        )
      })}
    </Responsive>

    <Responsive as={ButtonGroup} minWidth={1540} widths="4" basic size="medium">
      {socialMedia.map(media => {
        return (
          <Popup
            content={media.content}
            key={media.key}
            size="mini"
            position="bottom center"
            trigger={
              <Button positive as={media.as} to={media.to}>
                <Icon className={media.style} name={media.icon} />
              </Button>
            }
          />
        )
      })}
    </Responsive>
  </>
)

export default SocialMediaButtons
