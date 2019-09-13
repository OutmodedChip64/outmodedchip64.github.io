import React from 'react';
import Disqus from "disqus-react"

import "./App.css"

function NewDisqusFrame(props) {
  return (
    <div className="article-container">
      <Disqus.DiscussionEmbed
        shortname="EFweb"
        identifier={props.id}
      />
    </div>
  )
}

class DisqusFrame extends React.Component {
  render() {
    return (
      <div className="article-container">
        <Disqus.DiscussionEmbed
          shortname="EFweb"
          identifier={this.props.id}
        />
      </div>
    )
  }
}

export default DisqusFrame;
