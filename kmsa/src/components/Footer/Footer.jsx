import "./footer.css";
function Footer() {
  return (
    <footer>
      <div>
        <img
          className="logo_footer"
          src={require("../../assets/LOGO.png")}
          alt="logo kasa"
        />
        <div>© 2020 Kasa. All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
