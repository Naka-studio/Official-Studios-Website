import "./style.scss";

const StateEmpty = ({ icon, title = "> Gagal Mengambil data__" }) => {
  return (
    <div className="content-wrapper">
      {icon}
      <span className="title">{title}</span>
    </div>
  );
};

export default StateEmpty;
