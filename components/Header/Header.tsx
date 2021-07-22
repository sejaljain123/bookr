/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image';

const Header = () => {
  const navList = useRef<HTMLUListElement>(null);

  const openNav = () => {
    navList.current?.classList.add('nav-show');
  };

  const closeNav = () => {
    navList.current?.classList.remove('nav-show');
  };

  return (
    <div className="top-container c-flex">
      <nav>
        <div className="bookr-logo c-flex">
          <Image height="50px" width="50px" src="/images/logo.png" alt="logo" />
          <span>Bookr</span>
        </div>
        <div role="menu" tabIndex={0} onClick={openNav} className="hamburger c-flex">
          <Image height="70px" width="70px" src="/images/menu.svg" alt="menu" />
        </div>
        <ul ref={navList} className="c-flex">
          <li role="menuitem" onClick={closeNav} className="back-button">
            <Image height="50px" width="50px" color="black" src="/images/back.png" alt="menu" />
          </li>
          <li role="menuitem" onClick={closeNav}>
            <Link href="#">
              <a>Sign In</a>
            </Link>
          </li>
          <li role="menuitem" onClick={closeNav}>
            <Link href="#">
              <a>Register</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .top-container {
          display: flex;
          justify-content: space-around;
          font-family: Raleway, sans-serif;
          font-size: 14px;
          align-items: center;
          text-align: center;
          letter-spacing: 0.03em;
        }
        .bookr-logo {
          display: flex;
          padding: 20px;
          color: var(--headline-color);
          font-family: NATS, sans-serif;
          cursor: pointer;
        }
        .bookr-logo span {
          margin: 0;
          margin-left: 6px;
          font-size: 2rem;
          font-weight: bold;
          letter-spacing: 2px;
        }
        .hamburger {
          display: none;
          height: 100%;
        }
        .hamburger img {
          height: 40px;
        }
        nav {
          width: 100%;
          height: 60px;
          z-index: 1200;
          top: 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 20px;
        }
        nav ul {
          list-style: none;
          margin-right: 15px;
        }
        nav ul a {
          transition: all 0.2s ease-in;
        }
        nav ul a:hover {
          filter: contrast(150%);
          box-shadow: 0 0px 0px var(--headline-color), 0 1px 1px var(--headline-color),
            0 1px 1px var(--headline-color), 0 2px 2px var(--headline-color),
            0 3px 3px var(--headline-color);
          padding: 5px;
        }
        nav ul li.back-button {
          display: none;
        }
        nav ul li {
          display: inline-block;
          margin: 0 15px;
          font-size: 1.3em;
          letter-spacing: 3px;
        }
        a {
          color: var(--headline-color);
          text-decoration: none;
        }
        nav ul.nav-show {
          right: 0;
        }
        nav ul.nav-show li {
          transform: translateX(0);
        }
        @media only screen and (max-width: 800px) {
          .bookr-logo img {
            height: 55%;
          }
          .hamburger {
            display: flex;
            margin-right: 20px;
          }
          nav ul li.back-button {
            display: block;
          }
          nav ul li.back-button img {
            height: 2em;
            width: 2em;
            filter: var(--invert-value);
            color: var(--headline-color);
          }
          nav ul {
            height: 100%;
            width: 100%;
            top: 0;
            right: -130%;
            z-index: 1800;
            position: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column nowrap;
            background: var(--background-color);
            margin: 0;
            transition: 0.5s ease-out;
          }
          nav ul li {
            color: black;
            margin: 30px 0 0 0;
            transform: translateX(200%);
            transition: 0.8s ease-out;
            transform-origin: 0 0;
          }
          .nav-show li a {
            color: var(--text-color);
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
