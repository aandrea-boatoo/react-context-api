import CardComponent from "./CardComponent";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
const apiUrl = 'http://localhost:3000';
const bookEndPoint = '/books';
export default function MainComponent() {
    const [books, setBooks] = useState([]);
    useEffect(getData, []);
    function getData() {
        axios
            .get(`${apiUrl}${bookEndPoint}`)
            .then((res) => { setBooks(res.data.results) })
            .catch((error) => { console.log(error) })
            .finally(() => { console.log("fatto") })
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    {books.map((book) => {
                        return (

                            <div className="col-12 col-md-4 col-lg-3" key={book.id}>
                                <CardComponent data={book} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}