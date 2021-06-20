import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Card, CardContent } from '@material-ui/core'
import Link from './link'

function projectPreview(edge) {
    return (
        <Link className="projectCard" key={edge.node.id} to={edge.node.frontmatter.slug}>
            <Card>
                <GatsbyImage
                    image={edge.node.frontmatter.image.childImageSharp.gatsbyImageData}
                    alt={edge.node.frontmatter.title}
                />
                <CardContent>{edge.node.frontmatter.title}</CardContent>
            </Card>
        </Link>
    )
}

export default projectPreview
