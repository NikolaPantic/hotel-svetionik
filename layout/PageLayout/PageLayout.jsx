const PageLayout = ({
  children = null,
  backgroundImageUrl = "",
  heading = "heading",
  pageLayoutSummary = "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
}) => {
  return (
    <div className="pagelayout">
      <div
        className="pagelayout__heading"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(20,20,20, 0.7), rgba(10,10,10, 0.7)), url(${backgroundImageUrl.src})`,
        }}
      >
        <div className="pagelayout__heading-wrapper">
          <h1 className="heading-secondary">{heading}</h1>
          <p className="pagelayout__heading--summary">{pageLayoutSummary}</p>
        </div>
      </div>
      <div className="pagelayout__content">{children}</div>
    </div>
  );
};

export default PageLayout;
