import React from "react";
import { Col, Card } from "antd";
import { EyeTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import "./MovieCatalog.scss";
import movie from "../../pages/movie";

export default function MovieCatalog(props) {
    const { movies: { results } } = props

    return results.map(movie => (
        <Col key={movie.id} span={6} className="movie-catalog">
            <MovieCard movie={movie}></MovieCard>
        </Col>
    ));

}
function MovieCard(props) {
    const { movie: { id, title, poster_path } } = props;
    const { Meta } = Card;
    const posterpath = `https://image.tmdb.org/t/p/original/${poster_path}`;

    return (
        <Link to={`/movie/${id}`} >
            <Card hoverable style={{ width: 240 }} cover={<img alt={title} src={posterpath} ></img>}
                actions={[<EyeTwoTone key="eye" />]}
            >
                <Meta title={title}></Meta>
            </Card>
        </Link>
    );
}