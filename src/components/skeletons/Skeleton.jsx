import "./Skeleton.scss";

const Skeleton = ({ height = "1em", width = "100" }) => {
  return <div className="skeleton" style={{ height, width }}></div>;
};

export default Skeleton;
