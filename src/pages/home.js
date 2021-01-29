import React from "react";
import { Row, Col } from "antd";
import useFetch from "../hooks/useFetch";
import SliderMovies from "../components/SliderMovies";
import { URL_API, API_KEY } from "../utils/constants";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";


export default function Home() {
    const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-CO&page=1`);
    console.log(newMovies);

    const popularMovies = useFetch(`${URL_API}/movie/popular?api_key=${API_KEY}&language=es-CO&page=1`);
    const topRatedMovies = useFetch(`${URL_API}/movie/top_rated?api_key=${API_KEY}&language=es-CO&page=1`);


    return (
        <>
            <SliderMovies movies={newMovies} />
            <Row>
                <Col span={12}>
                    <MovieList title="Películas populares" movies={popularMovies} ></MovieList>
                </Col>
                <Col span={12}>
                    <MovieList title="Películas mejor calificadas" movies={topRatedMovies} ></MovieList>

                </Col>
            </Row>
            <Footer></Footer>
        </>);
}