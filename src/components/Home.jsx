import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router';
import { useEffect } from 'react';
import { Productcard } from './Productcard';

export const Home = () => {

    const { token } = useSelector(state => state.Login);
    console.log("token in hoome is:", token);

    const [products, setProducts] = useState({
        loading: false,
        error: false,
        data: []
    })

    const getData = () => {
        setProducts(prev => ({
            ...prev,
            loading: true
        }))

        fetch(`http://localhost:8080/products`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(prev => ({
                    ...prev,
                    loading: false,
                    data: res,
                    error: false
                }))
                // console.log(res)
            })
            .catch((error) => setProducts(prev => ({
                ...prev,
                loading: false,
                error: true
            })))
    }
    useEffect(() => {
        getData();

    }, [])
    return (
        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", gap: "58px", width: "75%", margin: "auto", marginTop: "5%" }}>
            {
                token !== null ?
                    products.loading ?
                        <h1>Loading...</h1>
                        : products.error
                            ? <h1>Something Went Wrong Please Try Again... </h1>
                            : products.data.map((ele) =>
                                <Productcard key={ele.id} props={ele} style={{ marginBottom: "15px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} />) : <Navigate to="/login" />
            }
        </div>
    )
}
