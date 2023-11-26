import styles from '../page.module.css'
import Header from '@/app/components/Header'
import Link from 'next/link'
import Image from 'next/image'

async function getMovie(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`,
    {
      next: {
        revalidate: 3600
      }
    })

  if (!res.ok) {
    //throws on server
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Movie({ params }) {
  const movie = await getMovie(params.id)
  const releaseDate = movie.release_date.split('-')[0]
  const rating = Math.round(movie.vote_average*10)/10
  return (
    <div className={styles.main}>
      <Header>
        <Link href='/'>
          <h1 className={styles.title}>
            Movie details
          </h1>
        </Link>
      </Header>
      <div className={styles.content}>
        <h2 className={styles.movieTitle}>{movie.title}</h2>
        <section className={styles.details}>
          <div className={styles.imageWrapper}>
            <Image className={styles.img} src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} width={115} height={172.5} />
            <div className={styles.detailsRight}>
              <h3 className={styles.releaseDate}>{releaseDate}</h3>
              <p className={styles.runtime}>{movie.runtime} mins</p>
              <p className={styles.rating}>{rating}/10</p>
              <button className={styles.favButton}>Add to Favourites</button>
            </div>
          </div>
          </section>
          <section className={styles.overview}>
          {movie.overview}
          </section>
      </div>
    </div>
  );
};
