import React from 'react'
import { Segment, Container, Header, Label } from 'semantic-ui-react'
import { useStaticQuery, graphql } from 'gatsby'
import _ from 'lodash'

const imageProps = {
  avatar: true,
  src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'
}

const TechnicalSkills = () => {
  const skills = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/-tech/" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 50, maxHeight: 50) {
                originalName
                tracedSVG
                src
              }
            }
          }
        }
      }
    }
  `)
  console.log(skills)

  return (
    <>
      <Segment>
        <Label attached="top">Technical Skills</Label>

        {skills.allFile.edges.map(skill => {
          return (
            <Label as="a" image>
              <img alt={skill.node.name} src={skill.node.childImageSharp.fluid.src} />
              {skill.node.name}
            </Label>
          )
        })}
      </Segment>
    </>
  )
}

export default TechnicalSkills
