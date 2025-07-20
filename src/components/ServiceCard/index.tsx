type ServiceCardProps = {
    imageSource: string,
    title: string,
    description: string
}

const ServiceCard = (serviceCardProps: ServiceCardProps) => {
    return (
        <div className="service__card">
            <img src={serviceCardProps.imageSource} alt="Service Card Image" className="service__card-image" />
            <h2 className="service__card-title">{serviceCardProps.title}</h2>
            <span className="service__card-description">{serviceCardProps.description}</span>
        </div>
    )
}

export default ServiceCard