import React from 'react'
import Img from 'gatsby-image'
import { Card, CardContent } from '@material-ui/core'
import Link from './link'

function projectPreview(edge) {
    return (
        <Link className="projectCard" key={edge.node.id} to={edge.node.frontmatter.slug}>
            <Card>
                <Img fluid={edge.node.frontmatter.image.childImageSharp.fluid} />
                <CardContent>{edge.node.frontmatter.title}</CardContent>
            </Card>
        </Link>
    )
}

export default projectPreview
