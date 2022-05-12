import './Footer.css'


const Footer = () => {
    return ( 
        <footer>
        <div className="footer-wrapper">
          <div className="footer-row">
            <div className="left">
              <p>&copy; Copyright MyPortfolio. All Rights Reserved.</p>
              <br />
              <p>Designed by <a href="/" className="footer-nametag">Ibrahim Dev</a></p>
            </div>
            <div className="right">
              <a href="https://github.com/Kolabalogun"
                ><img
                  src="img/svg/github-brands.svg"
                  alt=""
                  className="footer-icn"
              /></a>
              <a href="https://www.linkedin.com/in/ibrahim-kolabalogun-7130631b9/"
                ><img
                  src="img/svg/linkedin-in-brands.svg"
                  alt=""
                  className="footer-icn"
              /></a>
              <a href="https://www.instagram.com/ibrahim_devv/"
                ><img
                  src="img/svg/instagram-brands.svg"
                  alt=""
                  className="footer-icn"
              /></a>
              <a href="https://twitter.com/AkinolaKb"
                ><img
                  src="img/svg/twitter-brands.svg"
                  alt=""
                  className="footer-icn"
              /></a>
            </div>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;