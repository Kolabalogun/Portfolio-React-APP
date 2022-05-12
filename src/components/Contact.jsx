import './Contact.css'

const Contact = () => {
    return ( 
        <section className="contact" id="Contact">
<div className="portfolio-header contact">
        <h2>Let's Build Something Together</h2>
        <div className="resources-line port contactw"></div>
        <div className="resources-line port contact"></div>
        <p className="cap portt contact">
          Feel free to reach out if you're looking for a developer or just want
          to connect
        </p>
      </div>
      <div className="contact-section">
        <ul>
          <li>
            <span className="keytitle">Email:</span><br /><br />
            <a href="mailto:>akinola10302@gmail.com">
              <span className="val">akinola10302@gmail.com</span>
            </a>
          </li>
          <li>
            <span className="keytitle">Phone:</span><br /><br />

            <a href="tel:+2348073374150"
              ><span className="val">+2348073374150</span></a
            >
          </li>
        </ul>
      </div>
        </section>
     );
}
 
export default Contact;