import Button from "../../components/Button"
import Section from "../../components/Section"
import ServiceCard from "../../components/ServiceCard"

const OurServiceSection = () => {
    return (
        <Section className="service">
            <h1 className="service__header">Our Services</h1>
            <span className="service__description">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</span>
            <div className="service__cards">
                <ServiceCard imageSource="./search-doctor.svg" title="Search doctor" description="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
                <ServiceCard imageSource="./online-pharmacy.svg" title="Online pharmacy" description="Buy your medicines with our mobile application with a simple delivery system" />
                <ServiceCard imageSource="./consultation.svg" title="Consultation" description="Free consultation with our trusted doctors and get the best recomendations" />
                <ServiceCard imageSource="./details-info.svg" title="Details info" description="Free consultation with our trusted doctors and get the best recomendations" />
                <ServiceCard imageSource="./emergency-care.svg" title="Emergency care" description="You can get 24/7 urgent care for yourself or your children and your lovely family" />
                <ServiceCard imageSource="./tracking.svg" title="Tracking" description="Track and save your medical history and health data" />
            </div>
            <Button className="service__button-more" variant="outline">Learn More</Button>
        </Section>
    )
}

export default OurServiceSection