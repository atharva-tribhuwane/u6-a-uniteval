import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

export const Productcard = ({props}) => {
    console.log("props",props)
    const navigate = useNavigate();
    // const [tp, setTp] = useState("Helllo")

  return (
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.title}
          </Typography>
          <Typography variant="h5" color="text.secondary" component="div">
          ₹{props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={`/prod/${props.id}`}>
        <Button size="small" color="primary" >
          More Details
        </Button>
        </Link>
      </CardActions>
    </Card>
    </div>
  );
}

