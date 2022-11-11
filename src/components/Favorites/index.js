import { StyledFavorites } from "./styles";

function Favorites({ favorites }) {

    return (
        <StyledFavorites>
            <h2>AluraTubes Favoritos</h2>
            <section>
                {favorites.map((favorite, index) => (
                    <div key={index}>
                        <img src={`https://github.com/${favorite.github}.png`} />
                        <span>
                            {favorite.title}
                        </span>
                    </div>
                ))}
            </section>
        </StyledFavorites>
    )
}

export default Favorites 