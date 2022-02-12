import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="about_links">
          <li className="footer_links">
            <a href="https://github.com/zyusnow/Group_Project--Remotely/">
              About
            </a>
          </li>
          <li className="footer_links">
            <a href="https://github.com/hisownway/">David's Github</a>
          </li>
          <li className="footer_links">
            <a href="https://github.com/sornamvairavan/">Sornam's Github</a>
          </li>
          <li className="footer_links">
            <a href="https://github.com/nikblvck/">Nik's Github</a>
          </li>
          <li className="footer_links">
            <a href="https://github.com/zyusnow">Zhen's Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
