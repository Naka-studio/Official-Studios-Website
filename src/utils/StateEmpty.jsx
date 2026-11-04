import { BookTemplateIcon } from "lucide-react";
import "./style.scss";

const StateEmpty = ({ icon, title = "", variant = "error" }) => {
  const isError = variant === "error";

  return (
    <div className="content-wrapper">
      {isError ? <BookTemplateIcon /> : icon}
      <span className="title">{isError ? "Gagal memuat data" : title}</span>
    </div>
  );
};

export default StateEmpty;
