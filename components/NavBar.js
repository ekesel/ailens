import React from 'react';
import {Navbar, NavbarContent, NavbarItem, DropdownItem, 
  DropdownTrigger, Dropdown, DropdownMenu, Link, Button} from "@nextui-org/react";
import styles from '../styles/navbar.module.css';


const NavBar = () => {

  return (
    <Navbar position="static">
      <NavbarContent className={styles.container}justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="#">
            HOME
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={styles.dropdownButton}
                variant="light"
                style={{
                  border: 'none',
                  outline: 'none',
                }}
              >
                <div className={styles.downArrow}></div>
                PRODUCTS
              </Button>
            </DropdownTrigger>
          </NavbarItem>
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
        <NavbarItem>
          <Link color="foreground" href="#">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavBar