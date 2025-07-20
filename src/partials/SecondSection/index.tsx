import Button from "../../components/Button"
import Section from "../../components/Section"

const SecondSection = () => {
    return (
        <Section className="second">
            <div className="second__image">
                <img src="./trafalgar-illustration-sec02.svg" alt="Illustration" />
            </div>
            <div className="second__text">
                <h1 className="second__text-heading">Leading healthcare providers</h1>
                <span className="second__text-description">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</span>
                <Button variant="outline" className="second__button-more">Learn more</Button>
            </div>
        </Section>
    )
}

export default SecondSection