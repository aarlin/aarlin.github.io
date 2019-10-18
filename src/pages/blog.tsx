import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'semantic-ui-react'
import IndexLayout from '../layouts'

const Blog = () => (
  <IndexLayout>
    <div style={{ color: `teal` }}>
      <h1>Blog</h1>
      <p>Such wow. Very React.</p>
    </div>
    <Button as={Link} to="/pickedblog" />
  </IndexLayout>
)

export default Blog
