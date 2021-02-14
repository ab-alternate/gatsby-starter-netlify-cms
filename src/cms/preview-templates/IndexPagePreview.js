import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = (props) => {
  const data = props.entry.getIn(['data']).toJS()
  const doc = props.document;
  if (data) {
    const spxjs = doc.createElement('script');
    spxjs.setAttribute('defer', true);
    spxjs.setAttribute('src', 'spacex.min.js');
    spxjs.setAttribute('type', 'text/javascript');

    doc.getElementsByTagName('head')[0].appendChild(spxjs);
    return (
      <IndexPageTemplate
        title={data.title}
        subtitle={data.subtitle}
        buttonText={data.buttonText}
        buttonLink={data.buttonLink}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
