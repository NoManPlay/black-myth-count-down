import React from 'react'
import {isMobile} from 'react-device-detect'
import {GITHUB_URL, PLAYSTATION_STORE_URL, STEAM_STORE_URL} from '@/constants'

const Nav = () => {
  return (
    <div
      className={`text-[#B09B7C] ${
        isMobile ? 'btm-nav bg-transparent' : 'w-full absolute bottom-4 flex gap-4 justify-center'
      }`}
    >
      <a href={GITHUB_URL} target="_blank">
        <span className="icon-[mingcute--github-fill] w-8 h-8"></span>
      </a>
      <a href={STEAM_STORE_URL} target="_blank">
        <span className="icon-[mdi--steam] w-8 h-8"></span>
      </a>
      <a href={PLAYSTATION_STORE_URL} target="_blank">
        <span className="icon-[ri--playstation-fill] w-8 h-8"></span>
      </a>
    </div>
  )
}

export default Nav
