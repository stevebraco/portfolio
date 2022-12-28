import React, { useState } from 'react'
import styled from 'styled-components'
import { ProjectsStyles } from './ProjectsStyles'
import ButtonFilter from '../Button/ButtonFilter'
import WindownMac from '../WindowMac/WindownMac'

const data = [
  {
    id: 1,
    name: 'Audiophile',
    img: 'assets/audioPic.png',
    video: 'assets/audiophile.mov',
    category: 'Personels',
    github:
      'https://github.com/stevebraco/React-Audiophile/tree/main/audiophile-ecomm-website/audiophile-ecomm-app',
    website: 'https://audiophile.vercel.app/',
  },
  {
    id: 2,
    name: 'FeedBack',
    img: 'assets/feedbackPic.png',
    video: 'assets/feedbackVideo.mov',
    category: 'Personels',
    github:
      'https://github.com/stevebraco/React-Audiophile/tree/main/audiophile-ecomm-website/audiophile-ecomm-app',
    website: 'https://audiophile.vercel.app/',
  },
  {
    id: 3,
    name: 'Dine',
    img: 'assets/dinePic.png',
    video: 'assets/dine.mov',
    category: 'Personels',
    github:
      'https://github.com/stevebraco/React-Audiophile/tree/main/audiophile-ecomm-website/audiophile-ecomm-app',
    website: 'https://audiophile.vercel.app/',
  },
  {
    id: 4,
    name: 'Air Hotel',
    img: 'assets/airhotelPic.jpeg',
    video: 'assets/dine.mov',
    category: 'Personels',
    github:
      'https://github.com/stevebraco/React-Audiophile/tree/main/audiophile-ecomm-website/audiophile-ecomm-app',
    website: 'https://audiophile.vercel.app/',
  },
  {
    id: 5,
    name: 'Air Hotel',
    img: 'assets/reviewsPic.jpeg',
    video: 'assets/dine.mov',
    category: 'Personels',
    github:
      'https://github.com/stevebraco/React-Audiophile/tree/main/audiophile-ecomm-website/audiophile-ecomm-app',
    website: 'https://audiophile.vercel.app/',
  },
  {
    id: 6,
    name: 'Booki',
    img: 'assets/BookiPic.png',
    video: 'assets/bookiVideo.mov',
    category: 'Formations',
    github:
      'https://github.com/stevebraco/React-Audiophile/tree/main/audiophile-ecomm-website/audiophile-ecomm-app',
    website: 'https://audiophile.vercel.app/',
  },
  {
    id: 7,
    name: 'Kasa',
    img: 'assets/kasaPic.jpeg',
    video: 'assets/kasaVideo.mov',
    category: 'Formations',
    github:
      'https://github.com/stevebraco/React-Audiophile/tree/main/audiophile-ecomm-website/audiophile-ecomm-app',
    website: 'https://audiophile.vercel.app/',
  },
  {
    id: 8,
    name: 'ohmyfood',
    img: 'assets/foodPic.png',
    video: 'assets/dine.mov',
    category: 'Formations',
    github:
      'https://github.com/stevebraco/React-Audiophile/tree/main/audiophile-ecomm-website/audiophile-ecomm-app',
    website: 'https://audiophile.vercel.app/',
  },
]

const Projects = () => {
  const categories = data.map((t) => t.category)
  const filterButton = ['All', ...new Set(categories)]

  const [selectedButton, setSelectedButton] = useState('All')
  const [selectedVideo, setSelectedVideo] = useState({
    name: 'audiophile',
    video: '/assets/audiophile.mov',
  })

  const handleSelectedButton = (button: string) => () => {
    setSelectedButton(button)
  }

  const handleCard = (name: string, video: string) => () => {
    setSelectedVideo({
      name,
      video,
    })
  }

  return (
    <>
      <WindownMac selectedVideo={selectedVideo} />
      <ProjectsStyles>
        <ButtonFilter
          filterButton={filterButton}
          handleSelectedButton={handleSelectedButton}
          selectedButton={selectedButton}
        />

        <CardList>
          {data
            .filter(({ category }) => {
              if (selectedButton === 'All') {
                return data
              }
              return category === selectedButton
            })
            .map(({ id, name, img, video, github, website }) => (
              <CardStyles key={id} onClick={handleCard(name, video)}>
                {/* <figure> */}
                <img src={img} alt={name} />
                <video autoPlay={true} loop={true} playsInline={true}>
                  <source src={video} type="video/mp4" />
                </video>
                <figcaption>{name}</figcaption>
                {/* </figure> */}
                <WrapperLink>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    github
                  </a>
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    website
                  </a>
                </WrapperLink>
              </CardStyles>
            ))}
        </CardList>
      </ProjectsStyles>
    </>
  )
}

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1000px;
  margin: 0 auto;
  gap: 25px;
`

export const CardStyles = styled.div`
  width: 290px;
  height: 411px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover figcaption {
    opacity: 1;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(2px);
    inset: 0;
    color: #ffffff;
    z-index: 6;
  }

  &:hover div {
    opacity: 1;
    bottom: 0px;
  }

  img {
    inset: 0px;
    display: block;
    height: 100%;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
    transition: 0.5s;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 15%) 0px 40px 58px -16px,
      rgb(0 0 0 / 15%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
      z-index: 2;
    }
  }

  figcaption {
    position: absolute;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    transition: 0.2s;
    left: 500px;
  }
`

const WrapperLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  position: absolute;
  bottom: -500px;
  background: #e9e7f5;
  color: black;
  width: 100%;
  height: 30px;
  opacity: 0;
  transition: 0.2s;
  z-index: 6;

  a {
    color: black;
  }
`

export default Projects
