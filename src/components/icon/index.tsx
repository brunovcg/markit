import { IconProps } from "./types";
function Icon({ icon, onClick }: IconProps) {
  return (
    <span
      style={{ cursor: onClick && "pointer" }}
      className="icon material-symbols-outlined"
      onClick={onClick}
    >
      {icon}
    </span>
  );
}

export default Icon;
