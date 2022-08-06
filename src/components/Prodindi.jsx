import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router';
export const Prodindi = () => {
    const { token } = useSelector(state => state.Login);
    const { id } = useParams();
    console.log(id);
    const [products, setProducts] = useState({
        loading: false,
        error: false,
        data: []
    })
    const handlecart = () => {
        const payload = {
            "product_id":"",
            "quantity":1 
        }
        fetch("http://localhost:8080/cart",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res) => res.json())
        .then((res)=> {console.log(res); alert("Added to cart")})
        .catch((err)=> console.log(err))

    }
    const getData = () => {
        setProducts(prev => ({
            ...prev,
            loading: true
        }))

        fetch(`http://localhost:8080/products/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(prev => ({
                    ...prev,
                    loading: false,
                    data: res,
                    error: false
                }))
                console.log(res)
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
        token !== null ?
                    products.loading ?
                        <h1>Loading...</h1>
                        : products.error
                            ? <h1>Something Went Wrong Please Try Again... </h1>
        :<div >
            <Card sx={{ maxWidth: 345 }} style={{ width: "100%", margin: "auto" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image={products.data.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {products.data.brand}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {products.data.title}
                        </Typography>
                        <Typography variant="h5" color="text.secondary" component="div">
                            ₹{products.data.price}
                        </Typography>
                        <Typography variant="h5" color="text.secondary" component="div">
                            FOR - {products.data.category}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Button size="small" color="primary" onClick={() => handlecart()}>
                        Add To Cart
                    </Button>
                    <Button size="small" color="primary" >
                        Go To Cart
                    </Button>

                </CardActions>
            </Card>
        </div>:<Navigate to="/login" />
    )
}
