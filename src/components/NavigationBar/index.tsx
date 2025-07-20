const NavigationBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="./logo.svg" alt="Logo" />
            </div>
            <div className="navbar__links">
                <a href="#" className="navbar__link active">Home</a>
                <a href="#" className="navbar__link">Find a doctor</a>
                <a href="#" className="navbar__link">Apps</a>
                <a href="#" className="navbar__link">Testimonials</a>
                <a href="#" className="navbar__link">About us</a>
            </div>
            <span className="navbar__hamburger">☰</span>
        </nav>
    )
}

export default NavigationBar