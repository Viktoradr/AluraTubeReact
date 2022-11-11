import { StyledHeader, Avatar, Banner } from "./styles"

function Header({ name, job, github, banner }) {

    return (
        <StyledHeader>
            <Banner bg={banner} />
            <section className="user-info">
                <Avatar src={`https://github.com/${github}.png`} />
                <div>
                    <h2>
                        {name}
                    </h2>
                    <p>
                        {job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

export default Header;