const FooterSection = ({ footerSectionHeading = "Unknown", children }) => {
  return (
    <div className="footersection">
      <h5 className="footersection__heading">{footerSectionHeading}</h5>
      <div className="footersection__content">{children}</div>
    </div>
  );
};

export default FooterSection;
