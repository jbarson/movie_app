
import styles from './page.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';

async function getMovies() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
  {
    next: {
      revalidate: 3600
    }
  })

  if (!res.ok) {
    //TODO add better error handling
    throw new Error('Failed to fetch data')
  }

  return res.json()
}



export default async function Home() {

  const movies = await getMovies();

  return (
    <main className={styles.main}>
      <Header>
        <h1 className='styles.title'>
          Pop Movies
        </h1>
      </Header>
      <div className={styles.content}>
        {movies.results.map((movie) => (
          <Link className={styles.poster} href={`/movie/${movie.id}`} key={movie.id}>
              <Image className={styles.img} key={movie.id} src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} width={185} height={277} />
            </Link>
        ))}
      </div>
    </main>
  )
}
