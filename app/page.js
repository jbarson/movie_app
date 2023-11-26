'use client';

import styles from './page.module.css'
import { useEffect, useState } from 'react'
// import movies from './api/mock.js'
import Image from 'next/image';



export default function Home() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=8f0e1c9f6c5e0a5a6a4d7e7e2d7b7f6c&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setMovies(data))

  }, [])


  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className='styles.title'>
          Pop Movies
        </h1>
        <div
          className={styles.menu} onClick={console.log}
          aria-haspopup="true"
          role="button"
          id="mainMenuOptions"
          aria-expanded="false"
          aria-label="Menu"
          tabIndex="0"
        />
      </header>
      <div className='styles.grid'>
        {/* {movies.results.map((movie) => (
          <p key={movie.id}>
            {movie.title}
            <Image src="https://image.tmdb.org/t/p/w500/{movie.image}" alt={movie.title} width={500} height={500} />
          </p>
        ))} */}




      </div>

    </main>
  )
}
