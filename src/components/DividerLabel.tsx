import React from 'react'
import { Divider, Header, Icon } from 'semantic-ui-react'

interface DividerLabelProps {
  label?: string
}

const DividerLabel: React.FC<DividerLabelProps> = ({ label }) => (
  <>
    <Divider horizontal>
      <Header as="h4">
        <Icon name="tag" />
        {label}
      </Header>
    </Divider>
  </>
)

export default DividerLabel
