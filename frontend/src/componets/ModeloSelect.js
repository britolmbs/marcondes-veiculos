import { useEffect, useState } from "react"
import { getModelos } from "../services/api";
import PropTypes from 'prop-types';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";

const ModeloSelect = ({ selectedMarca, selectedModelo, setSelectedModelo} => {
    const[modelos, setModelos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (selectedMarca) {
            const fetchModelos = async () => {
                setLoading(true);
                try {
                    const response = await getModelos(selectedMarca);
                    setModelos(response.data);
                    setError(null);
                } catch (err) {
                setError('Não foi possivel carregar os modelos');

                } finally {
                    setLoading(false);
                }
            };
            fetchModelos();
        }else {
            setModelos([]);
            setSelectedModelo('');
        }
    }, [selectedMarca, setSelectedModelo]);

    return (
        <FormControl fullWidth variant="outlined" margin="normal" disabled={!selectedMarca || loading}>
            <InputLabel id="modelo-select-label">Modelo</InputLabel>
            <Select
                labelId="modelo-select-label"
                value={selectedModelo}
                onChange={(e) => setSelectedModelo(e.target.value)}
                label="Modelo">
                    {modelos.map((modelo) => (
                        <MenuItem key={modelo.codigo} value={modelo.codigo}>
                            {modelo.nome}
                        </MenuItem>
))}
                </Select>
                {loading && <FormHelperText>Carregando modelos...</FormHelperText>}
                {error && <FormHelperText error>{error}</FormHelperText>} 
        </FormControl>
    );
};
ModeloSelect.propTypes ={
    selectedMarca: PropTypes.string.isRequired,
    selectedModelo: PropTypes.string.isRequired,
    setSelectedModelo: PropTypes.func.isRequired,
};

export default ModeloSelect;