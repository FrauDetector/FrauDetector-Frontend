import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
          <navbar className={styles.navbar}>
            <a href="/">Home</a>
            <a href="/report">Report</a>
            <a href="/removal">Removal</a>
            <a href="/api">Documentation</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/legal">Legal</a>
            <a href="https://github.com/FrauDetector" target="_blank">Github</a>
          </navbar>
        </div>
    )
};

export default Navbar