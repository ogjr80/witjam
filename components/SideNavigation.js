'use client'; 
import { useState } from 'react';
import Link from 'next/link';
import styles from './SideNavigation.module.css';  // Import the CSS module

const SideNavigation = ({ menuItems }) => {
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <div className={styles.navigationContainer}>
      <nav className={styles.sideNav}>
        <ul className={styles.menuList}>
          {menuItems.map(item => (
            <li key={item.id} className={styles.menuItem}>
              <button onClick={() => toggleMenu(item.id)} className={styles.linkButton}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {openMenuId && menuItems.find(item => item.id === openMenuId).submenu.length > 0 && (
        <div className={styles.submenuPanel}>
          <ul className={styles.submenuList}>
            {menuItems.find(item => item.id === openMenuId).submenu.map(subitem => (
              <li key={subitem.id} className={styles.submenuItem}>
                <Link href={subitem.link} passHref>
                  <p className={styles.link}>{subitem.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideNavigation;
