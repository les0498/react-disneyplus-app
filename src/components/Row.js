import axios from '../api/axios';
import React, { useCallback, useEffect, useState } from 'react';
import "./Row.css";
import MovieModal from './MovieModal';


const Row = ({ title, id, fetchUrl }) => {
  const [Movies, setMovies] = useState([]); // 초기 상태를 빈 배열로 설정
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelectioin] = useState({});

  const fetchMovieData = useCallback(async () => {
    try {
      const response = await axios.get(fetchUrl);
      console.log('response', response);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelectioin(movie);
  }


  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow'
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {Movies && Movies.map(movie => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name} // alt 속성 추가
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div className='slider__arrow-right'>
          <span className='arrow'
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 80;
          }}>
            {">"}
          </span>
        </div>
      </div>

      {modalOpen &&
        <MovieModal
        {...movieSelected}
          setModalOpen={setModalOpen}
        />
      }
    </div>
  );
};

export default Row;
