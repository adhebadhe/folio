import React from 'react';

const Box = () => {
  return (
    <div className="box">

      <div className="vline"></div>

      <div className="hline">
        <div className="tlcontent">Technical Stalk</div>
        <div className="trcontent">Tools</div>

        <div className="blcontent">
          <div className="font-sm">C++ / C / OpenGL / SDL</div>
          <div className="font-sm">MySQL / NodeJS / ReactJS</div>
          <div className="font-sm">Nginx / HTML / CSS</div>
        </div>

        <div className="brcontent">
          <div className="font-sm">Photoshop / linux / osx / windows</div>
          <div className="font-sm">Vim / Bash / NPM / VScode</div>
        </div>

      </div>
    </div>
  )
}

export default Box;