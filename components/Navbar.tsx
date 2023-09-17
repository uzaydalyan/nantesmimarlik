import styles from '../styles/Navbar.module.scss'
import Image from 'next/image';
import Logo from '../public/nantes_logo.svg';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <nav className={`${styles.navbar_content} navbar navbar-expand-md bg-white`}>
                <div className="container-fluid">
                    <a className={`${styles.logo} navbar-brand abs`} href="#"><Image width="295" src={Logo} alt="logo"  /></a>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="collapseNavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#about">Hakkımızda</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#projects">Projeler</a>
                            </li>
                            <li className={`${styles.contact_us} nav-item`}>
                                <a className={`${styles.contact_us_text} nav-link`} href="#contact">Bize Ulaşın</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;