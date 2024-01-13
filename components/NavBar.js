import React from 'react';
import {
  DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Button
} from "@nextui-org/react";
import styles from '../styles/navbar.module.css';
import Link from 'next/link';


const NavBar = () => {

  const scrolltoDiv = (e, div) => {
    e.scrolltoDiv()
  }

  return (
    <nav className={`${styles.fill}`}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about" prefetch={true}>About</Link></li>
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
                <a href="/#products">Products</a>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="AI Lens Products">
              <DropdownItem key="ppeDetection" className={styles.dropdownItem}>
                <Link href='#ppe_detection' scroll={false}>
                PPE Detection</Link>
              </DropdownItem>
              <DropdownItem key="zoneManagement" className={styles.dropdownItem}>
                <Link href='#zone_management' scroll={false}>
                Zone Management</Link>
              </DropdownItem>
              <DropdownItem key="emergencySignal" className={styles.dropdownItem}>
              <Link href='#emergency_signal' scroll={false}>
                Emergency Signal</Link>
              </DropdownItem>
              <DropdownItem key="_monitors" className={styles.dropdownItem}>
              <Link href='#monitors' scroll={false}>
                Spark, Dust & Gas Monitor</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li><Link href="/#contact_form" scroll={false}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar