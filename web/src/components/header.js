import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'
import typo from './typography.module.css';

const Header = ({onHideNav, onShowNav, showNav, siteTitle, siteSubtitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link className={typo.title3} to='/'>{siteTitle}
          <p className={typo.micro}>{siteSubtitle}</p>
        </Link>
        
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/archive/'>Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
