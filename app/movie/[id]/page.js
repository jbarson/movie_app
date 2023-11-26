import styles from '../page.module.css'
import Header from '@/app/components/Header'
import Link from 'next/link'

async function getMovie(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`,
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

export default async function Movie({ params }) {
  console.log(params.id)
  const movie = await getMovie(params.id)
  console.log(movie)
  return (
    <div className={styles.main}>
      <Header>
        <Link href='/'>
          <h1 className='styles.title'>
            Movie details
          </h1>
        </Link>
      </Header>
      <h1>Movie Page</h1>
      <p>{JSON.stringify(movie)}</p>
    </div>
  );
};
