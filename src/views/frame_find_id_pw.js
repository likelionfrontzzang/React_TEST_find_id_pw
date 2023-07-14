import React from 'react'

import { Helmet } from 'react-helmet'

import './frame_find_id_pw.css'

import { Button, TextField } from '@mui/material'

const Frame = (props) => {
  return (
    <div className="frame-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame-frame">
        <div className="frame-text">
          <Button
          type="submit" className="login_purple1"
          sx={{
            mb: 3,
            backgroundColor:'rgba(79, 65, 222, 1)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '10px 30px',
            fontSize: '16px',
            width: '110%',
          }}>아이디 찾기</Button>
          </div>
        <div className="frame-text02">
          <Button
          type="submit" className="login_gray"
          sx={{
            mb: 3,
            backgroundColor:'rgba(215,215,215)',
            color: 'black',
            border: 'none',
            borderRadius: '4px',
            padding: '10px 30px',
            fontSize: '16px',
            width: '110%',
          }}>비밀번호 찾기</Button>
        </div>
        <div className="frame-text04">
          <span>가입한 이메일로 찾기</span>
        </div>
        <div className="frame-pw">
          <TextField label="이메일 입력" className="frame-text06" fullWidth="True"></TextField>
        </div>
        <div className="frame-text08">
          <span>가입한 전화번호로 찾기</span>
        </div>
        <div className="frame-pw1">
          <TextField label="전화번호 입력" className="frame-text10" fullWidth="True" ></TextField>
        </div>
        <div className="frame-login">
          <div className="frame-text12">
          <Button
          type="submit" className="login_purple1" id="log.login"
          sx={{
            mb: 3,
            backgroundColor:'rgba(79, 65, 222, 1)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '10px 20px',
            fontSize: '16px',
            width: '250%',
          }}>아이디 찾기</Button>
          </div>
        </div>
        <div className="frame-group2">
          <div className="frame-text14">
            <span>아낄끼니</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frame
