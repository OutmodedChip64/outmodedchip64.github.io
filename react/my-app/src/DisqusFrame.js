import React from 'react';
import Disqus from "disqus-react"

import "./App.css"

class DisqusFrame extends React.Component {
  render() {
    return (
      <div className="article-container">
        <Disqus.DiscussionEmbed
          shortname="EFweb"
          identifier={this.props.identifier}
        />
      </div>
    )
  }
}

export default DisqusFrame;
