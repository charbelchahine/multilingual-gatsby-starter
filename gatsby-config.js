module.exports = {
    siteMetadata: {
        title: `Mountain Central`,
        description: `A simple starter to get up and developing quickly with Gatsby. It supports multiple languages, NetlifyCMS, styling with Sass, Material-UI components & dark mode`,
        image: '/metaImages/default.png',
        url: `https://mountaincentral.netlify.app`,
        author: `Charbel Chahine`,
    },
    plugins: [
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    placeholder: "blurred",
                },
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
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
                            linkImagesToOriginal: false,
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
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
                htmlTitle: 'Mountain Central CMS',
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Roboto:100,300,400,500,700,900`, // you can also specify font weights and styles
                ],
                display: 'swap',
            },
        },
    ],
}
