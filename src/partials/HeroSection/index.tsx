import Button from "../../components/Button"
import Section from "../../components/Section"

const HeroSection = () => {
    return (
        <Section className='hero'>
            <div className="hero__text">
                <h1 className="hero__text-heading">Virtual healthcare for you</h1>
                <span className="hero__text-description">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</span>
                <Button>Consult today</Button>
            </div>
            <div className="hero__image">
                <img src="./trafalgar-header-illustration.svg" alt="" />
            </div>
        </Section>
    )
}

export default HeroSection