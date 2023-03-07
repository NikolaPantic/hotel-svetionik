const FooterSection = ({ footerSectionHeading = "Unknown", children }) => {
  return (
    <div className="footersection">
      <h2 className="footersection__heading">{footerSectionHeading}</h2>
      <div className="footersection__content">{children}</div>
    </div>
  );
};

export default FooterSection;
