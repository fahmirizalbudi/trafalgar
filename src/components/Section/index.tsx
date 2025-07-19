type SectionProps = {
    children: React.ReactNode,
    className?: string
}

const Section = (sectionProps: SectionProps) => {
    const classes = [
        'section',
        sectionProps.className
    ].filter(Boolean).join(' ')

    return <section className={classes}>{sectionProps.children}</section>
}

export default Section