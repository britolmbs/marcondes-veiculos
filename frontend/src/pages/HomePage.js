import React, { useEffect, useState } from "react";
import { Alert, CircularProgress, Container, Grid, Typography } from "@mui/material";
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
                    setVeiculos([response.data]);
                    setError(null);
                } catch (err) {
                    setError("Não foi possivel carregar os veiculos");
                } finally {
                    setLoading(false);
                }
            } else { setVeiculos([]);}
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
                setSelectedModelo={setSelectedModelo} />
            {loading && <CircularProgress sx={ marginTop: 2 }} />}
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