import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";

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
        <p />
        <p style={{textAlign: "center"}}>This is the trial for my 3D platformer game. (The game may take a few seconds to load)</p>
        <p style={{textAlign: "center"}}>Use WASD or arrow keys to move, spacebar to jump (hold to go higher), and hold shift to go faster.</p>
        <p style={{textAlign: "center"}}>If the game doesn't work and you cannot move the player, then press on the game panel and try again. If you cannot start the game, try reloading the page.</p>
      </div>
    );
  }
}

export default Cubicle;
