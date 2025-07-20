import { useState } from "react"

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false)

    const handleNavigationBar = () => setIsOpen(!isOpen)

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="./logo.svg" alt="Logo" />
            </div>
            <div className={`navbar__links ${isOpen && "navbar__links--opened"}`}>
                <a href="#" className="navbar__link active">Home</a>
                <a href="#" className="navbar__link">Find a doctor</a>
                <a href="#" className="navbar__link">Apps</a>
                <a href="#" className="navbar__link">Testimonials</a>
                <a href="#" className="navbar__link">About us</a>
                <span className="navbar__close" onClick={handleNavigationBar}>&times;</span>
            </div>
            <span className="navbar__hamburger" onClick={handleNavigationBar}>☰</span>
        </nav>
    )
}

export default NavigationBar