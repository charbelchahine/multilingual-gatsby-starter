module.exports = {
    siteMetadata: {
        title: `Mountain Central`,
        description: `A simple starter to get up and developing quickly with Gatsby. It supports multiple languages, NetlifyCMS, styling with Sass, Material-UI components & dark mode`,
        author: `Charbel Chahine`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    // 'gatsby-remark-autolink-headers',
                    // `gatsby-plugin-netlify-cms-paths`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 1200,
                            backgroundColor: 'transparent', // required to display blurred image first
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Mountain Central',
                short_name: 'Mtn Central', // less than 12 characters
                start_url: `/`,
                background_color: '#0E283F',
                theme_color: '#0E283F',
                display: `fullscreen`,
                icon: `src/assets/images/maskable_icon.png`, // This path is relative to the root of the site.
                icon_options: {
                    // For all the options available, please see:
                    // https://developer.mozilla.org/en-US/docs/Web/Manifest
                    // https://w3c.github.io/manifest/#purpose-member
                    purpose: `maskable`,
                },
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-use-dark-mode',
            options: {
                classNameDark: 'dark-mode',
                classNameLight: 'light-mode',
                storageKey: 'darkMode',
                minify: true,
            },
        },
        `gatsby-plugin-netlify-cms`,
    ],
}
