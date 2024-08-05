import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div>
        <h1>RESONICA</h1>
        <h3>Festival</h3>
      </div>
      <div>
        <a href="https://www.instagram.com/resonica_xyz/" target="_blank">
          <svg
            width="20pt"
            height="20pt"
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(245, 245, 245)"
          >
            <path d="m900 37.5h-600c-69.609 0.09375-136.31 27.75-185.53 76.969-49.219 49.219-76.875 115.92-76.969 185.53v600c0.09375 69.609 27.75 136.31 76.969 185.53 49.219 49.219 115.92 76.875 185.53 76.969h600c69.609-0.09375 136.31-27.75 185.53-76.969 49.219-49.219 76.875-115.92 76.969-185.53v-600c-0.09375-69.609-27.75-136.31-76.969-185.53-49.219-49.219-115.92-76.875-185.53-76.969zm187.5 862.5c-0.046875 49.688-19.828 97.359-54.984 132.52s-82.828 54.938-132.52 54.984h-600c-49.688-0.046875-97.359-19.828-132.52-54.984s-54.938-82.828-54.984-132.52v-600c0.046875-49.688 19.828-97.359 54.984-132.52s82.828-54.938 132.52-54.984h600c49.688 0.046875 97.359 19.828 132.52 54.984s54.938 82.828 54.984 132.52zm-487.5-562.5c-69.609 0-136.4 27.656-185.63 76.875-49.223 49.219-76.875 116.02-76.875 185.63 0 69.613 27.656 136.4 76.875 185.63 49.219 49.223 116.02 76.875 185.63 76.875s136.4-27.656 185.63-76.875c49.223-49.219 76.875-116.02 76.875-185.63-0.09375-69.609-27.75-136.31-76.969-185.53-49.219-49.219-115.92-76.875-185.53-76.969zm0 450c-49.734 0-97.406-19.734-132.56-54.938-35.203-35.156-54.938-82.828-54.938-132.56 0-49.738 19.734-97.406 54.938-132.56 35.156-35.203 82.828-54.938 132.56-54.938 49.738 0 97.406 19.734 132.56 54.938 35.203 35.156 54.938 82.828 54.938 132.56-0.046875 49.688-19.828 97.359-54.984 132.52s-82.828 54.938-132.52 54.984zm384.37-506.26c0 26.531-15.984 50.484-40.5 60.609-24.516 10.172-52.781 4.5469-71.531-14.203s-24.375-47.016-14.203-71.531c10.125-24.516 34.078-40.5 60.609-40.5 36.234 0 65.625 29.391 65.625 65.625z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
