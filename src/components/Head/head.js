import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import T from 'i18n-react';
import Helmet from 'react-helmet';

const Head = ({ seo = {}, path }) => (
    <StaticQuery
        // prettier-ignore
        query={graphql`
			query HeadQuery {
				site {
					siteMetadata {
						title
						description
						type
						name
						url
						sameAs
						facebookAppID
						twitterSiteID
						twitterUserID
					}
				}
			}
		`}
        render={data => {
            const site = data.site.siteMetadata;
            const schemaOrgJSONLD = [
                {
                    '@context': 'http://schema.org',
                    '@type': 'WebSite',
                    url: site.url + path,
                    name: seo.title || site.title,
                    description: seo.description || site.description,
                    image: `${site.url}/icons/seo.png`,
                },
                {
                    '@context': 'http://schema.org',
                    '@type': site.type,
                    name: site.name,
                    url: site.url,
                    sameAs: site.sameAs,
                },
            ];
            if (seo.article) {
                const { article } = seo;
                schemaOrgJSONLD.navigate({
                    '@context': 'http://schema.org',
                    '@type': 'Article',
                    headline: article.title || null,
                    image: article.image || null,
                    author: article.author || null,
                    url: article.url || null,
                    publisher: article.publisher || null,
                    datePublished: article.date.published || null,
                    dateCreated: article.date.created || null,
                    dateModified: article.date.modified || null,
                    description: article.description || null,
                });
            }
            return (
                <Helmet titleTemplate={`%s | ${site.title}`} defaultTitle={site.title}>
                    <html lang={T.translate('key')} className={seo.className} />
                    <link
                        rel="apple-touch-icon"
                        href="/icons/apple-touch-icon.png"
                        sizes="180x180"
                    />
                    <link
                        rel="icon"
                        href="/icons/favicon-32x32.png"
                        sizes="32x32"
                        type="image/png"
                    />
                    <link
                        rel="icon"
                        href="/icons/favicon-16x16.png"
                        sizes="16x16"
                        type="image/png"
                    />
                    <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#663399" />
                    <meta name="msapplication-config" content="/browserconfig.xml" />
                    <meta name="author" content={seo.author || site.name} />
                    <meta name="description" content={seo.description || site.description} />
                    <meta name="twitter:card" content="summary" />
                    {site.facebookAppID ? (
                        <meta property="fb:app_id" content={site.facebookAppID} />
                    ) : null}
                    {site.twitterSiteID ? (
                        <meta name="twitter:site" content={site.twitterSiteID} />
                    ) : null}
                    {site.twitterUserID ? (
                        <meta name="twitter:creator" content={site.twitterUserID} />
                    ) : null}
                    <meta property="og:site_name" content={site.title} />
                    <meta property="og:locale" content={T.translate('key')} />
                    <meta property="og:title" content={seo.title || site.title} />
                    <meta property="og:type" content={seo.type || 'website'} />
                    <meta property="og:description" content={seo.description || site.description} />
                    <meta property="og:url" content={site.url + path} />
                    <meta property="og:image" content={`${site.url}/icons/seo.png`} />
                    <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
                </Helmet>
            );
        }}
    />
);

Head.propTypes = {
    seo: PropTypes.shape({
        article: PropTypes.shape({
            author: PropTypes.string,
            date: PropTypes.shape({
                created: PropTypes.string,
                modified: PropTypes.string,
                published: PropTypes.string,
            }),
            description: PropTypes.string,
            image: PropTypes.string,
            publisher: PropTypes.string,
            title: PropTypes.string,
            url: PropTypes.string,
        }),
        author: PropTypes.string,
        class: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.string,
        description: PropTypes.string,
    }),
    path: PropTypes.string.isRequired,
};

Head.defaultProps = {
    seo: {},
};

export default Head;
