import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";

class PlayerPixel extends React.Component {
  constructor(props) {
    super(props);
    this.unityContent = new UnityContent(
      "/playerpixel/Build/PlayerPixel for Web Build.json",
      "/playerpixel/Build/UnityLoader.js"
    );
  }

  render() {
    return (
      <div className="main">
        <Unity unityContent={this.unityContent} />
        <p />
        <p style={{textAlign: "center"}}>This is the development of the 2D platformer game being developed by myself, Asher Molzer, and Isaiah Roman. (The game may take a few seconds to load)</p>
        <p style={{textAlign: "center"}}>Use WASD or arrow keys to move, spacebar to jump, hold shift to go faster, and press Q to go to the Pixel Editor.</p>
        <p style={{textAlign: "center"}}>If the game doesn't work and you cannot move the player, then press on the game panel and try again.</p>
      </div>
    );
  }
}

export default PlayerPixel;
