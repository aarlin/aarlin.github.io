import React from 'react'
import { Segment } from 'semantic-ui-react'

const SectionBrowser: React.FC = ({ children }) => {
  return (
    <>
      <Segment raised attached="bottom">
        {children}
      </Segment>
    </>
  )
}

export default SectionBrowser
