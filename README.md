# Multilingual Gatsby NetlifyCMS Starter

This is a gatsby starter, it supports multiple languages, NetlifyCMS, styling with Sass, Material-UI components & dark mode! A hosted demo is found at https://mountaincentral.netlify.com

## Table of Contents

-   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Clone the repo](#clone-the-repo)
    -   [Development](#development)
    -   [Sass](#sass)
    -   [Set up NetlifyCMS](#set-up-netlifycms)
    -   [Configuring NetlifyCMS](#configuring-netlifycms)
-   [Lighthouse Audit](#lighthouse-audit)
-   [Author](#author)

## Built With

-   [GatsbyJS](https://www.gatsbyjs.org) - to obtain static/offline Progressive Web App
-   [NetlifyCMS](https://www.netlifycms.org) - to obtain blog posts from markdown files.
-   [react-i18next](https://react.i18next.com/) - Internationalization to obtain multilingual site
-   [Sass](https://sass-lang.com) - for styling
-   [Material-UI](https://material-ui.com) - React components based on Material Design
-   [Enzyme](https://enzymejs.github.io/enzyme/) & [Jest](https://jestjs.io) - for unit testing
-   [ESLint](https://eslint.org) & [Prettier](https://prettier.io) - for code formatting

## Getting Started

These instructions will get you a copy of this gastby starter up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure to have [Node](https://nodejs.org/) & [Yarn](https://yarnpkg.com/) installed on your local machine

Open a terminal window and install React & Gatsby's command line tool

```
yarn add react react-dom gatsby-cli
```

### Clone the repo

Clone the repo in the directory of your choice and then move to this new directory

```
git clone https://github.com/charbelchahine/multilingual-gatsby-netlifycms.git
cd multilingual-gatsby-netlifycms
```

Install all dependencies for the prototype

```
yarn install
```

### Development

Start a hot-reloading development environment

```
gatsby develop
```

You will now be able to view the prototype at http://localhost:8000/. Any change you make to your React components will immediately be visible in the browser.

### Sass

Run `yarn sass` before making changes to any of the `.scss` files.

### Set up NetlifyCMS

The following steps-by-steps use [Netlify](https://www.netlify.com) to host the starter from GitHub. Other methods can be used to implement [NetlifyCMS](https://www.netlifycms.org).

1. Sign in or make a [Netlify](https://www.netlify.com) account
1. Make a **New site From Git** and select GitHub
1. Select the appropriate repo
1. Go to the Identity tab and **Enable Identity**
1. Click on **Settings and usage**
1. Under **Registration** check **Invite only**
1. Under **External providers**, add GitHub, Google etc
1. Under **Services** enable git gateway
1. Go back to the Identiy tab and invite users/yourself
1. Go to your netlify hosted website `/admin/` and login using your credentials to access the CMS

### Configuring NetlifyCMS

In `/static/admin/confiq.yml`, the CMS can be configured. Right now, blog posts are configured to have the same path in english & french; hence the titles are also the same since they are configured to create the path in `gatsby-node.js`.

## Lighthouse Audit

| Audits              | Score |
| ------------------- | ----: |
| Performance         |   98% |
| Progressive Web App |  100% |
| Accessibility       |  100% |
| Best Practices      |  100% |
| SEO                 |  100% |

## Author

**Charbel Chahine** - [LinkedIn](https://www.linkedin.com/in/charbelchahine/)
