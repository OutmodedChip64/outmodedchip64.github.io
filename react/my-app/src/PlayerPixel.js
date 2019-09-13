import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";

class PlayerPixel extends React.Component {
  constructor(props) {
    super(props);
    this.unityContent = new UnityContent(
      "playerpixel/Build/PlayerPixel for Web Build.json",
      "playerpixel/Build/UnityLoader.js"
    );
  }

  render() {
    return (
      <div className="main">
        <Unity unityContent={this.unityContent} />
      </div>
    );
  }
}

export default PlayerPixel;
