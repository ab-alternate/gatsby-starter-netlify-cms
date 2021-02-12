import React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>SpaceX CMS Demo</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="spacex.min.css" />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="SpaceX CMS Demo" />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />

        <script defer type="text/javascript" src="spacex.min.js"></script>
      </Helmet>

      <div>{children}</div>
    </div>
  )
}

export default TemplateWrapper
