import React, { useEffect, useState } from "react";
import { Row, Col, Input } from "antd";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from "../../components/MovieCatalog";
import Footer from "../../components/Footer";
import { URL_API, API_KEY } from "../../utils/constants";

import "./search.scss";
import MovieList from "../../components/MovieList";

function Search(props) {
    const { location, history } = props;
    const [movieList, setMoviList] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    if (!searchValue) {

    }
    useEffect(() => {

        (async () => {

            const searchValue = queryString.parseUrl(location.search);
            const { s } = searchValue.query;
            if (s) {
                const response = await fetch(`${URL_API}/search/movie?api_key=${API_KEY}&language=es-ES&query=${s}&page=1`);


                const movies = await response.json();

                setSearchValue(s);
                setMoviList(movies);
            }
        })();

    }, [location.search]);
    const onChangeSearch = e => {
        const urlParams = queryString.parse(location.search);
        urlParams.s = e.target.value;
        history.push(`?${queryString.stringify(urlParams)}`);
        setSearchValue(e.target.value);

    };

    return (
        <Row>
            <Col span="12" offset="6" className="search">
                <h1>Busca tú película</h1>
                <Input value={searchValue} onChange={onChangeSearch} />
            </Col>

            {movieList.results && (
                <Row>
                    <Row>
                        <MovieCatalog movies={movieList}></MovieCatalog>
                    </Row>
                </Row>
            )}
        </Row>
    );
}

export default withRouter(Search);