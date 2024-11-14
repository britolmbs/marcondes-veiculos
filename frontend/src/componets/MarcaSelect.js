import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, CircularProgress, FormHelperText } from "@mui/material";
import { getMarcas } from "../services/api";

const MarcaSelect = ({selectedMarca, setSelectedMarca }) => {
    const [marcas, setMarcas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarcas = async () => {
            setLoading(true);
            try {
                const data = await getMarcas();
                setMarcas(data);
                setError(null);
            } catch (err) {
                setError('Não foi possivel carregar as marcas');
            } finally{
                setLoading(false);
            }
            };
            fetchMarcas();
        },[]);

        return (
            <FormControl fullWdth variant="outlined" margin="normal" disabled={loading}>
                <InputLabel id="marca-select-label">Marca</InputLabel>
                <select
                    labelId="marca-select-label"
                    value={selectedMarca}
                    onChange={(e) => setSelectedMarca(e.target.value)}
                    label="Marca">
                        {marcas.map((marca) => (
                            <MenuItem key={marca.codigo} value={marca.codigo}>
                                {marca.nome}
                            </MenuItem>
                        ))}
                    </select>
                    {loading && <FormHelperText>Carregando marcas...</FormHelperText>}
                    {error && <FormHelperText error>{error}</FormHelperText>}
            </FormControl>
        );
        };

        export default MarcaSelect;