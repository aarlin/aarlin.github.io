import { SemanticCOLORS } from 'semantic-ui-react'

interface TagMapping {
  javascript: string
  typescript: string
  react: string
  gatsby: string
  graphql: string
  [key: string]: string
}

export function associateColorToTag(tag: string): SemanticCOLORS {
  const associatedColorPerTag: TagMapping = {
    javascript: 'yellow',
    typescript: 'blue',
    react: 'teal',
    gatsby: 'violet',
    graphql: 'pink'
  }
  return associatedColorPerTag[tag] as SemanticCOLORS
}
