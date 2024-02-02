import React, { useState } from 'react'
import {Text} from "@nextui-org/react"

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import albumArt from "../assets/images/jd.svg"

import "../assets/style/music.css"

const songCount = 12;
const mins = 10;
const secs = 30;

export default function Music() {
  
  const [videoPlayerOpen, setViewPlayerOpen] = useState(false)

  const [tab, setTab] = useState("album")
  
  return (
    <div className="spotify-container container-fluid">
      <div className="row w-100 d-flex flex-row align-items-center justify-content-center">
        <div className="col-0 col-md-2 d-flex flex-column align-items-center justify-content-center spotify-sidebar">
          <div className="tab-selector spotify-bg-light w-100">
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
        <div className="col-12 col-md-10 album-container">
          <div className="album">
            <div className="album-header">
              <img src={albumArt} alt="album-art" />
              <div className="album-text">
                <Text>Album</Text>
                <Text h1>Joe Dobbelaar</Text>
                <span>
                  <img src={albumArt} alt="Joe Dobbelaar" />
                  <a href="http://www.youtube.com/r2pen2/" target="_blank" rel="noreferrer">
                    <Text b>Joe Dobbelaar</Text>
                  </a>
                  <Text className="dot">2001</Text>
                  <Text className="dot">{songCount} songs, {mins} min {secs} sec</Text>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
