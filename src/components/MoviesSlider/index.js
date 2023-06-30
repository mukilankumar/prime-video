// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const setting = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }
  const {moviesList} = props

  return (
    <>
      <Slider {...setting}>
        {moviesList.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
