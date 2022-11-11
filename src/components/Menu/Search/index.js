import { StyledSearch } from "./styles";

export default function Search({ filtro, setFiltro }) {

    const handleSearch = (event) => {
        setFiltro(event.target.value);
    };

    return (
        <StyledSearch>
            <input type="text" value={filtro} onChange={handleSearch} />
            <button> 🔎 </button>
        </StyledSearch>
    )   
}