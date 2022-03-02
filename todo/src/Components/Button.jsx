const Button = ({ title = "", icon, bgColor = "#004cff", width }) => {
  return (
    <a
      className="button btn btn-primary"
      style={{ backgroundColor: bgColor, width: width }}
    >
      <i className={icon} aria-hidden="true"></i> {title}
    </a>
  );
};
export default Button;
