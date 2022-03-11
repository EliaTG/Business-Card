import React from 'react'
import { GithubOutlined, LinkedinOutlined, TwitterOutlined  } from '@ant-design/icons';

function Footer() {
  return (
    <div className="Footer">
        <div className="icons">
            <a href="https://github.com/EliaTG" target="blank"><GithubOutlined /></a>
            <a href="https://www.linkedin.com/in/eliatoribio/" target="blank"><LinkedinOutlined /></a>
            <a href="" target="blank"><TwitterOutlined /></a>
             {/* <GithubOutlined />
             <LinkedinOutlined />
             <TwitterOutlined /> */}
        </div>
    </div>
  )
}

export default Footer