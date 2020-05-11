/**
 * Gatsby's Node APIs.
 * https://www.gatsbyjs.org/docs/node-apis/
 * */

const path = require('path');
const slugify = require('slugify');
const i18n = require('./src/i18n/config/i18n');

const Promise = require(`bluebird`);

exports.onCreatePage = ({ page, actions }) => {
    if (page.componentPath && page.componentPath.match(/pages|templates/)) {
        const { createPage, deletePage } = actions;
        const getTitle = (object, path) => {
            const array = path.split('/').filter(val => val);
            if (path === '/') {
                array.push('home');
            }
            let value = {};
            value = array.reduce(
                (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
                object,
            );
            return value ? value.title : 'Untitled';
        };
        return new Promise(resolve => {
            deletePage(page);
            Object.keys(i18n).map(key => {
                return createPage({
                    ...page,
                    path: i18n[key].path + page.path,
                    context: {
                        lang: i18n[key],
                        title: getTitle(i18n[key], page.path),
                    },
                });
            });
            resolve();
        });
    }
    return null;
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    return graphql(`
        {
            allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
                edges {
                    node {
                        fileAbsolutePath
                        html
                        frontmatter {
                            title
                            template
                            key
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: `${i18n[node.frontmatter.key].path}/${slugify(node.frontmatter.title)}`,
                component: path.resolve(`src/templates/${String(node.frontmatter.template)}.js`),
                context: {
                    filePath: node.fileAbsolutePath,
                    lang: i18n[node.frontmatter.key],
                    title: node.frontmatter.title,
                    html: node.html,
                },
            });
            createPage({
                path: `${i18n[node.frontmatter.key].path}/${slugify(node.frontmatter.template)}`,
                component: path.resolve(
                    `src/templates/${String(node.frontmatter.template)}Index.js`,
                ),
                context: {
                    key: node.frontmatter.key,
                    lang: i18n[node.frontmatter.key],
                    filePath: path.resolve(
                        `src/templates/${String(node.frontmatter.template)}Index.js`,
                    ),
                    title: node.frontmatter.template,
                    html: node.html,
                },
            });
        });
    });
};
