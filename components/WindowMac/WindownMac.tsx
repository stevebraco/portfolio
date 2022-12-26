import React from 'react'
import {
  Windows,
  WindowStyles,
  Header,
  WrapperCircle,
  Circle,
  Title,
} from './WindowMacStyles'

const WindownMac = ({
  selectedVideo,
}: {
  selectedVideo: { name: string; video: string }
}) => {
  return (
    <Windows>
      {/* <BigTitle>Projet Récent</BigTitle> */}
      {/* <BackImg src="./assets/background-image.png" alt="" srcset="" /> */}
      <WindowStyles>
        <Header>
          <WrapperCircle>
            <Circle color="rgb(250, 133, 164)" />
            <Circle color="rgb(255, 229, 110)" />
            <Circle color="rgb(82, 226, 130)" />
          </WrapperCircle>
          <Title>{selectedVideo.name}</Title>
        </Header>
        <video
          // ref={vidRef}
          // onClick={handlePlayVideo}
          src={selectedVideo.video}
          autoPlay
          muted
          loop
        ></video>
      </WindowStyles>
    </Windows>
  )
}

export default WindownMac
