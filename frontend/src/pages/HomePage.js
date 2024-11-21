
import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, CircularProgress, Alert } from "@mui/material";
import MarcaSelect from "../componets/MarcaSelect";
import ModeloSelect from "../componets/ModeloSelect";
import CarCard from "../componets/CarCard";
import { getVeiculo } from "../services/api";

const HomePage = () => {
    const [selectedMarca, setSelectedMarca] = useState("");
    const [selectedModelo, setSelectedModelo] = useState("");
    const [veiculos, setVeiculos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVeiculos = async () => {
            if (selectedModelo) {
                setLoading(true);
                try {
                    const response = await getVeiculo(selectedModelo);
                    setVeiculos([response.data]); // Ajuste conforme a resposta da API
                    setError(null);
                } catch (err) {
                    setError('Não foi possível carregar os veículos');
                } finally {
                    setLoading(false);
                }
            } else {
                setVeiculos([]);
            }
        };
        fetchVeiculos();
    }, [selectedModelo]);

    return (
        <Container sx={{ marginTop: 4 }}>
            <Typography variant="h4" gutterBottom>
                Concessionária Marcondes Veículos
            </Typography>
            <MarcaSelect selectedMarca={selectedMarca} setSelectedMarca={setSelectedMarca} />
            <ModeloSelect 
                selectedMarca={selectedMarca} 
                selectedModelo={selectedModelo} 
                setSelectedModelo={setSelectedModelo} 
            />
            {loading && <CircularProgress sx={{ marginTop: 2 }} />}
            {error && <Alert severity="error" sx={{ marginTop: 2 }}>{error}</Alert>}
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                {veiculos.map((veiculo) => (
                    <Grid item xs={12} sm={6} md={4} key={veiculo.codigo}>
                        <CarCard veiculo={veiculo} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HomePage;