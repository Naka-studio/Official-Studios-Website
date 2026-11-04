import "./Skeleton.scss";

const Skeleton = ({ height = "1em", width = "100", margin = "0" }) => {
  return <div className="skeleton" style={{ height, width, margin }}></div>;
};

export default Skeleton;
