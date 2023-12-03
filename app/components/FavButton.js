'use client'

import styles from './favButton.module.css'
import { useEffect, useState } from 'react'


function FavButton({ movie}) {

  const [favorite, setFavorite] = useState(false)

  useEffect(() => {
    const favList = localStorage.getItem('favList')

    if (favList) {
      const favListArray = JSON.parse(favList)
      const isFavorite = favListArray.includes(movie.id)
      setFavorite(isFavorite)
    }
  }, [movie.id])


  const handleClick = () => {
    const favList = localStorage.getItem('favList')

    if (favList) {
      if (favorite){
        const favListArray = JSON.parse(favList)
        const favtoRemove = favListArray.findIndex((item) => item === movie.id)
        favListArray.splice(favtoRemove, 1)
        localStorage.setItem('favList', JSON.stringify(favListArray))
        setFavorite(false)
      } else {
        const favListArray = JSON.parse(favList)
        favListArray.push(movie.id)
        localStorage.setItem('favList', JSON.stringify(favListArray))
        setFavorite(true)
      }

    } else {
      localStorage.setItem('favList', JSON.stringify([movie.id]))
      setFavorite(true)
    }
  }
  return (
    <button className={styles.favButton} onClick={handleClick}>
      {favorite ? 'Remove from Favourites' : 'Add to Favourites'}
    </button>
  )
}

export default FavButton