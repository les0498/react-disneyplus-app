import axios from '../api/axios';
import React, { useCallback, useEffect, useState } from 'react';
import "./Row.css";


const Row = ({ title, id, fetchUrl }) => {
  const [Movies, setMovies] = useState([]); // 초기 상태를 빈 배열로 설정

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

  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow'>
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
            />
          ))}
        </div>
        <div className='slider__arrow-right'>
          <span calssName='arrow'>
            {">"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Row;
