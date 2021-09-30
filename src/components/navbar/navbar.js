export default function NavBar(){
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
                <a className="navbar-brand" href="#">LoWGow</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="container">
                        <ul className="navbar-nav nav justify-content-center  nav-fill">
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Experience</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}
