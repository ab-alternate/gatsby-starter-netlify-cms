import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = (props) => {
  return(
  <AboutPageTemplate
    title={props.entry.getIn(['data', 'title'])}
    content={props.widgetFor('body')}
    another={props.entry.getIn(['data', 'another'])}
  />
);
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
