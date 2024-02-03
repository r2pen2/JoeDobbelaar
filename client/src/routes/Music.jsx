import React, { useEffect, useRef, useState } from 'react'
import {Button, Divider, Modal, Text} from "@nextui-org/react"

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import albumArt from "../assets/images/jd.svg"

import "../assets/style/music.css"
import { IconButton } from '@mui/material';

const songCount = 12;
const mins = 10;
const secs = 30;

const songs = [
  {
    order: 1,
    title: "Hereafter",
    artist: "Architects",
    duration: "4:14",
    link: "https://www.youtube.com/watch?v=nmlRsOEfer4&ab_channel=JoeDobbelaar",
    artistHref: "https://open.spotify.com/artist/3ZztVuWxHzNpl0THurTFCv"
  },
  {
    order: 2,
    title: "I Used To Have A Best Friend (But Then He Gave Me An STD)",
    artist: "Asking Alexandria",
    duration: "4:06",
    link: "https://www.youtube.com/watch?v=rDxN3VlAYnM&ab_channel=JoeDobbelaar",
    artistHref: "https://open.spotify.com/artist/1caBfBEapzw8z2Qz9q0OaQ"
  },
  {
    order: 3,
    title: "Yule Shoot Your Eye Out",
    artist: "Fall Out Boy",
    duration: "3:28",
    link: "https://www.youtube.com/watch?v=SWqz49SEqnk&ab_channel=JoeDobbelaar",
    artistHref: "https://open.spotify.com/artist/4UXqAaa6dQYAk18Lv7PEgX"
  },
  {
    order: 4,
    title: "We Only Come Out At Night",
    artist: "Motionless In White",
    duration: "3:15",
    link: "https://www.youtube.com/watch?v=-mSvvenM0J4&ab_channel=JoeDobbelaar",
    artistHref: "https://open.spotify.com/artist/6MwPCCR936cYfM1dLsGVnl"
  },
  {
    order: 5,
    title: "Guillotine IV (The Final Chapter)", 
    artist: "Falling In Reverse",
    duration: "3:38",
    link: "https://www.youtube.com/watch?v=nb_kyA3mjIg&ab_channel=JoeDobbelaar",
    artistHref: "https://open.spotify.com/artist/2CmaKO2zEGJ1NWpS1yfVGz"
  },
  {
    order: 6,
    title: "Sambuka", 
    artist: "Pierce The Veil",
    duration: "2:28",
    link: "https://www.youtube.com/watch?v=2Fd2uMSa8gw&ab_channel=JoeDobbelaar",
    artistHref: "https://open.spotify.com/artist/4iJLPqClelZOBCBifm8Fzv"
  },
  {
    order: 7,
    title: "A Boy Brushed Red Living In Black And White", 
    artist: "Underoath",
    duration: "4:29",
    link: "https://www.youtube.com/watch?v=I2UQ19dPCdY&ab_channel=JoeDobbelaar",
    artistHref: "https://open.spotify.com/artist/3GzWhE2xadJiW8MqRKIVSK"
  },
  {
    order: 8,
    title: "I Was Once, Possibly, Maybe, Perhaps A Cowboy King", 
    artist: "Asking Alexandria",
    duration: "3:41",
    link: "https://www.youtube.com/watch?v=ShTEkM-EFiw&ab_channel=JoeDobbelaar",
    artistHref: "https://open.spotify.com/artist/1caBfBEapzw8z2Qz9q0OaQ"
  },
  {
    order: 9,
    title: "Bloodmeat", 
    artist: "Protest The Hero",
    duration: "3:56",
    link: "https://www.youtube.com/watch?v=oHe6E4KW_HE&ab_channel=JoeDobbelaar",
    artistHref: "https://open.spotify.com/artist/6z3BjfmgvDUIHaJ0UPTtrQ"
  },
  {
    order: 10,
    title: "With Ears To See And Eyes To Hear", 
    artist: "Sleeping With Sirens",
    duration: "3:59",
    link: "https://www.youtube.com/watch?v=RAi7v9rzAwQ&ab_channel=JoeDobbelaar",
    artistHref: "https://open.spotify.com/artist/3N8Hy6xQnQv1F1XCiyGQqA"
  },
]

const songOrderWidth = 20;

export default function Music() {
  
  const [videoPlayerOpen, setViewPlayerOpen] = useState(false)

  const [tab, setTab] = useState("album")

  const [sidebarWidth, setSidebarWidth] = useState(300);

  const [mouseDown, setMouseDown] = useState(false);

  const handleRightResizeMouseDown = (event) => {
    setMouseDown(true);
    event.preventDefault();
  };

  const handleMouseUp = (_event) => {
    setMouseDown(false);
  };

  const handleMouseMove = (event) => {
    if (mouseDown) {
      let newWidth = 0;
      if (event.pageX < 70) {
        newWidth = 70;
      } else {
        newWidth = event.pageX < 400 ? event.pageX : 400;
      }
      setSidebarWidth(newWidth);
    }
  };

  function SongItem({song}) {
    return (
      <div className="song-item d-flex flex-row align-items-center justify-content-between px-5 py-1" style={{width: "90%"}} onClick={() => window.open(song.link, "_blank")}>
        <Text color="#a7a7a7" size="$xl" className="m-0" style={{width: songOrderWidth}}>{song.order}</Text>
        <div className="d-flex flex-column align-items-start w-100 text-left">
          <Text color="white" size="$xl" className="m-0">{song.title}</Text>
          <a href={song.artistHref} target="_blank" rel="noreferrer">
            <Text color="#a7a7a7" className="m-0">{song.artist}</Text>
          </a>
        </div>
        <Text color="#a7a7a7">{song.duration}</Text>
      </div>
    )
  }
  
  const [tipModalOpen, setTipModalOpen] = useState(true);

  return (
    <div className="spotify-container" onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
      <Modal open={tipModalOpen} onClose={() => setTipModalOpen(false)} closeButton>
        <Modal.Header>
          <Text h1>Hey, there!</Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            I've been covering metal songs for a couple years now, and this page serves as a trampoline to my Youtube videos. Soon I intend to embed the player into this page. Hope you enjoy :)
          </Text>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-row justify-content-center">
          <Button flat color="success" onClick={() => setTipModalOpen(false)}>Okay, cool. Now yell at me!</Button>
        </Modal.Footer>
      </Modal>
      <div className="d-flex flex-column align-items-center justify-content-center spotify-sidebar" style={{ width: sidebarWidth }}>
        <div className="right-resizer" onMouseDown={handleRightResizeMouseDown} />
        <div className="tab-selector spotify-bg-light w-100 p-relative">
          <div className="tab-item">
            <HomeOutlinedIcon />
            <Text>Home</Text>
          </div>
          <div className="tab-item">
            <SearchOutlinedIcon />
            <Text>Search</Text>
          </div>
        </div>
        <div className="recents-selector spotify-bg-light w-100">

        </div>
      </div>
      <div className="album-container">
        <IconButton className="p-2" style={{zIndex: 2, position: 'absolute', top: "1.25rem", left: "1.25rem", backgroundColor: "#000000aa"}} onClick={() => window.location = "/"}>
          <ArrowBackIosNewIcon className="d-flex flex-column align-items-center justify-content-center" style={{color: "white"}} />
        </IconButton>
        <div className="album">
          <div className="album-header">
            <img src={albumArt} alt="album-art" />
            <div className="album-text">
              <Text color="white">Album</Text>
              <Text h1 color="white">Joe Dobbelaar</Text>
              <span>
                <img src={albumArt} alt="Joe Dobbelaar" />
                <a href="http://www.youtube.com/r2pen2/" target="_blank" rel="noreferrer">
                  <Text b color="white">Joe Dobbelaar</Text>
                </a>
                <Text className="dot" color="white">2001</Text>
                <Text className="dot" color="white">{songCount} songs, {mins} min {secs} sec</Text>
              </span>
            </div>
          </div>
          <div className="album-content">
              <div className="content-header">
                <div className="text-left" style={{width: songOrderWidth}}><Text color="#a7a7a7" size="$xl">#</Text></div>
                <div className="text-left w-100"><Text color="#a7a7a7" size="$xl">Title</Text></div>
                <div className=""><AccessTimeOutlinedIcon style={{color: "#a7a7a7"}} /></div>
              </div>
              <Divider style={{backgroundColor: "#a7a7a733", width: "90%"}} height={1} />
            { songs.map((s, i) => <SongItem key={i} song={s}/>) }
          </div>
        </div>
      </div>
    </div>
  )
}
