import React from 'react'
import { useSelector } from 'react-redux'
import classNames from "classnames";
import { RootState } from '../../store/store';
import './Footer.scss'

const Footer = () => {
  const darkTheme = useSelector((state: RootState) => state.theme.isDark);
  const textClass = darkTheme ? 'text-light' : 'text-secondary';

  return (
    <div className='row footerContainer'>
      <div className={classNames('footerText', textClass)}>
        Site designed and developed by Rachel Halepeska. Last updated: May 14, 2022
      </div>
    </div>
  )
}

export default Footer;