import React from "react";
import "./SliderMovies.scss";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading";

export default function SliderMovies(props) {
    const { movies } = props;
    if (movies.loading || !movies.result) {
        return (<Loading />);

    }
    const { results } = movies.result;
    return (
        <Carousel autoplay className="slider-movies">
            {results.map(movie => (
                <Movie movie={movie} key={movie.id}></Movie>
            ))}
        </Carousel>);
}
function Movie(props) {
    const { movie: { id, backdrop_path, tittle, overview } } = props;
    const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    return (
        <div className="slider-movies__movie" style={{ backgroundImage: `url('${backdropPath}')` }}>
            <div className="slider-movies__movie-info">
                <div>
                    <h2>
                        {tittle}
                    </h2>
                    <p>{overview}</p>
                    <Link to={`/movie/${id}`}>
                        <Button type="primary">Ver más</Button>
                    </Link>
                </div>
            </div>
        </div>);

}