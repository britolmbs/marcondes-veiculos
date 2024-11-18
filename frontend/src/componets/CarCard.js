import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import PropTypes from 'prop-types';
import placeholder from '../assets/placeholder.png';

const CarCard = ({ veiculo }) => {
    const { nome, preco, imagem } = veiculo;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image={imagem || placeholder}
        alt={nome}/>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Preço: {preco}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Detalhes</Button>
        </CardActions>
    
        </Card>
    );
};

CarCard.PropTypes ={
    veiculo: PropTypes.shape({
        nome: PropTypes.string.isRequired,
        preco: PropTypes.string.isRequired,
        imagem: PropTypes.string,
    }).isRequired,
};

export default CarCard;