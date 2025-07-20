import Section from "../../components/Section"

const FooterSection = () => {
    return (
        <footer>
            <Section className="footer">
                <div className="footer__trafalgar">
                    <img src="./logo-light.svg" alt="Logo" className="footer__trafalgar-image" />
                    <span className="footer__trafalgar-text">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</span>
                    <span className="footer__trafalgar-copyright">©Trafalgar PTY LTD 2020. All rights reserved</span>
                </div>
                <div className="footer__group">
                    <div className="footer__company">
                        <span className="footer__company-heading">Company</span>
                        <ul className="footer__company-lists">
                            <li className="footer__company-list">About</li>
                            <li className="footer__company-list">Testimonials</li>
                            <li className="footer__company-list">Find a doctor</li>
                            <li className="footer__company-list">Apps</li>
                        </ul>
                    </div>
                    <div className="footer__region">
                        <span className="footer__region-heading">Region</span>
                        <ul className="footer__region-lists">
                            <li className="footer__region-list">Indonesia</li>
                            <li className="footer__region-list">Singapore</li>
                            <li className="footer__region-list">Hongkong</li>
                            <li className="footer__region-list">Canada</li>
                        </ul>
                    </div>
                    <div className="footer__help">
                        <span className="footer__help-heading">Help</span>
                        <ul className="footer__help-lists">
                            <li className="footer__help-list">Help center</li>
                            <li className="footer__help-list">Contact support</li>
                            <li className="footer__help-list">Instructions</li>
                            <li className="footer__help-list">How it works</li>
                        </ul>
                    </div>
                </div>
            </Section>
        </footer>
    )
}

export default FooterSection