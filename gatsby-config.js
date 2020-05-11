module.exports = {
    siteMetadata: {
        title: 'Mountain Central',
        description: 'Mountain Central',
        type: 'Person',
        name: 'Mountain Central',
        url: 'https://mountaincentral.netlify.com/',
        sameAs: ['http://www.facebook.com/your-profile', 'http://www.twitter.com/yourProfile'],
        facebookAppID: '',
        twitterSiteID: '',
        twitterUserID: '',
        siteUrl: 'https://mountaincentral.netlify.com/',
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
                cmsConfig: `/static/admin/config.yml`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-autolink-headers',
                    `gatsby-plugin-netlify-cms-paths`,
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
        'gatsby-plugin-catch-links',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Mountain Central',
                short_name: 'Mtn Central', // less than 12 characters
                start_url: '/',
                background_color: '#0E283F',
                theme_color: '#582644',
                display: 'minimal-ui',
                icon: 'static/icons/icon.png',
            },
        },
        'gatsby-plugin-sitemap',
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `#575757`,
                showSpinner: false,
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-sass',
        'gatsby-plugin-netlify-cms',
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
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
    ],
};
