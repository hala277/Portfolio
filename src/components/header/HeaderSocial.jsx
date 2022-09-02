import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
<a href="https://www.linkedin.com/in/hala-almasharfeh-6338b1214/" target='_blank'><BsLinkedin/></a>
<a href="https://github.com/hala277" target='_blank'> <FaGithub/> </a>

    </div>
  )
}

export default HeaderSocial;