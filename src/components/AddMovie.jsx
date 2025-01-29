import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({
      ...movieData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Movie Data Submitted:', movieData);
  };

  return (
    <div className="add-movie-form">
      <h1>Add a New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={movieData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Director:</label>
          <input
            type="text"
            name="director"
            value={movieData.director}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Genre:</label>
          <select
            name="genre"
            value={movieData.genre}
            onChange={handleChange}
            required
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
        <div>
          <label>Release Year:</label>
          <input
            type="number"
            name="releaseYear"
            value={movieData.releaseYear}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Synopsis:</label>
          <textarea
            name="synopsis"
            value={movieData.synopsis}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Poster Image URL:</label>
          <input
            type="url"
            name="posterUrl"
            value={movieData.posterUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
