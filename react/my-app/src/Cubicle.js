import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";
import DisqusFrame from './DisqusFrame'

class Cubicle extends React.Component {
  constructor(props) {
    super(props);
    this.unityContent = new UnityContent(
      "/cubicle/Build/Cubicle for Web Build.json",
      "/cubicle/Build/UnityLoader.js"
    );
  }

  render() {
    return (
      <div className="main">
        <Unity unityContent={this.unityContent} />
        <DisqusFrame identifier="cubicle"/>
      </div>
    );
  }
}

export default Cubicle;
