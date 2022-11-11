import config from "../config.json";
import Favorites from "../src/components/Favorites";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import Menu from "../src/components/Menu";
import { useState } from "react";

function HomePage() {

    const [filtro, setFiltro] = useState("");

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu filtro={filtro} setFiltro={setFiltro} />
                <Header {...config}/>
                <Timeline searchValue={filtro} playlists={config.playlists} />
                <Favorites favorites={config.favorites} />
            </div>
        </>
    );
}

export default HomePage