import React from 'react'
import Container from 'react-bootstrap/Container';
import image from '../../Assets/logo.png'
import { AiFillPhone } from 'react-icons/ai'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>

            <Container>
                <div className={styles.navContainer}>
                    <nav className={styles.navbar}>
                        <div className={styles.navDiv}>
                            <img src={image} alt="logo" className={styles.logo}/>
                            <span>course</span>
                        </div>
                        <ul className={styles.list}>
                            <li><Link to={'/'} className={styles.link}>Home</Link></li>
                            <li>About us</li>
                            <li><Link to={'/create'} className={styles.link}>Add new</Link></li>
                            <li>Elements</li>
                            <li>News</li>
                            <li>Contact</li>
                        </ul>
                        <div className={styles.call}>
                            <div className={styles.phone}>
                                <AiFillPhone className={styles.icon}/>
                                <span>+43 4566 7788 2457</span>
                            </div>
                        </div>
                    </nav>
                </div>
            </Container>
        </>
    )
}

export default Navbar