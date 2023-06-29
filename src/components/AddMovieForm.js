import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddMovie = (props) => {
  const [input, setInput] = useState({
    title: "",
    director: "",
    genre: "",
    metascore: 0,
    description: "",
  });

  const { title, director, genre, metascore, description } = input;

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/movies", input)
      .then((res) => {
        props.setMovies(res.data);
        navigate("/movies");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="modal-body">
      <div className="form-group">
        <label>Title</label>
        <input
          value={title}
          onChange={handleChange}
          name="title"
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Director</label>
        <input
          value={director}
          onChange={handleChange}
          name="director"
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input
          value={genre}
          onChange={handleChange}
          name="genre"
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Metascore</label>
        <input
          value={metascore}
          onChange={handleChange}
          name="metascore"
          type="number"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={handleChange}
          name="description"
          className="form-control"
        ></textarea>
      </div>
      <input
        type="submit"
        className="btn btn-info"
        value="Save"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default AddMovie;
