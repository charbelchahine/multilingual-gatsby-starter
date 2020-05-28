/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/**
 * Creates localized paths for each file in the /pages folder.
 * For example, pages/404.js will be converted to /en/404.js and /el/404.js and
 * it will be accessible from https:// .../en/404/ and https:// .../el/404/
 */
const { currentLanguages } = require('./src/i18n/config/currentLanguages')

exports.onCreatePage = async ({ page, actions: { createPage, deletePage } }) => {
    // Delete the original page (since we are gonna create localized versions of it)
    await deletePage(page)

    // Create one page for each locale
    await Promise.all(
        currentLanguages.map(async lang => {
            const originalPath = page.path
            const localizedPath = `${lang.path}${page.path}`

            await createPage({
                ...page,
                path: localizedPath,
                context: {
                    ...page.context,
                    originalPath,
                    lang: lang.shorthand,
                },
            })
        }),
    )
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const projectTemplate = require.resolve(`./src/templates/project.js`)
    const result = await graphql(`
        {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
                edges {
                    node {
                        frontmatter {
                            slug
                            key
                        }
                    }
                }
            }
        }
    `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const currentLanguage = currentLanguages.find(
            language => node.frontmatter.key === language.shorthand,
        )
        createPage({
            path: `${currentLanguage.path}${node.frontmatter.slug}`,
            component: projectTemplate,
            context: {
                // additional data can be passed via context
                originalPath: node.frontmatter.slug,
                lang: currentLanguage.shorthand,
            },
        })
    })
}
