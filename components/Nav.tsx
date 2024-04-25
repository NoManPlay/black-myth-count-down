import React from 'react'
import {isMobile} from 'react-device-detect'
import {GITHUB_URL, PLAYSTATION_STORE_URL, QQ_GROUP_ID, QQ_GROUP_URL, STEAM_STORE_URL} from '@/constants'

const Nav = () => {
  return (
    <>
      {isMobile ? (
        <div className="btm-nav bg-transparent text-[#B09B7C]">
          <a href={QQ_GROUP_URL} target="_blank">
            <span className="icon-[mingcute--qq-fill] w-8 h-8"></span>
          </a>
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
      ) : (
        <div className="w-full absolute bottom-4 flex gap-4 justify-center text-[#B09B7C]">
          <a href="#my_modal">
            <span className="icon-[mingcute--qq-fill] w-8 h-8"></span>
          </a>
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
      )}

      <div className="modal" role="dialog" id="my_modal">
        <div className="modal-box bg-[#B09B7C]">
          <h3 className="font-bold text-lg">QQ群</h3>
          <p className="py-4">{QQ_GROUP_ID}</p>
          <div className="modal-action">
            <a href="#" className="btn text-[#B09B7C]">
              关闭
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
