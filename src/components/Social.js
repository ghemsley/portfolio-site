import React from 'react'
import {
  IoMail,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoYoutube
} from 'react-icons/io5'
import { AiFillInstagram } from 'react-icons/ai'

const Social = ({ iconSize }) => {
  const socialLinks = [
    {
      name: 'Github',
      url: 'https://github.com/ghemsley',
      icon: (
        <IoLogoGithub
          className='social-link-icon'
          size={iconSize}
          title='Github'
        />
      )
    },

    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ghemsley',
      icon: (
        <IoLogoLinkedin
          className='social-link-icon'
          size={iconSize}
          title='LinkedIn'
        />
      )
    },

    {
      name: 'Instagram',
      url: 'https://www.instagram.com/graham_hemsley/',
      icon: (
        <AiFillInstagram
          className='social-link-icon'
          size={iconSize}
          title='Instagram'
        />
      )
    },

    {
      name: 'Youtube',
      url: 'https://www.youtube.com/channel/UCPBF8BLVVuLA5J8SQkejK7Q',
      icon: (
        <IoLogoYoutube
          className='social-link-icon'
          size={iconSize}
          title='Youtube'
        />
      )
    },

    {
      name: 'Email',
      url: 'mailto:ghemsley@protonmail.com?subject=Portfolio&body=',
      icon: (
        <IoMail className='social-link-icon' size={iconSize} title='Email' />
      )
    }
  ]

  return (
    <div className='social-links'>
      {socialLinks.map((social, i) => {
        return (
          <a
            href={social.url}
            rel='noopener noreferrer'
            target='_blank'
            className='social-link'
            title={social.name}
            key={i}>
            {social.icon}
          </a>
        )
      })}
    </div>
  )
}

export default Social
