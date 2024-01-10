import React from 'react';
import {
  DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Link, Button
} from "@nextui-org/react";
import styles from '../styles/navbar.module.css';


const NavBar = () => {

  return (
    <nav className={`${styles.fill}`}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                variant="light"
                style={{
                  border: 'none',
                  outline: 'none',
                }}
              >
                <a href="#">Products</a>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="AI Lens Products">
              <DropdownItem key="ppe_detection" className={styles.dropdownItem}>
                PPE Detection
              </DropdownItem>
              <DropdownItem key="zone_management" className={styles.dropdownItem}>
                Zone Management
              </DropdownItem>
              <DropdownItem key="emergency_signal" className={styles.dropdownItem}>
                Emergency Signal
              </DropdownItem>
              <DropdownItem key="monitors" className={styles.dropdownItem}>
                Spark, Dust & Gas Monitor
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavBar