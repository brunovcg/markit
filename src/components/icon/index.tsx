import { IconProps } from "./types";
function Icon({ icon, onClick, className }: IconProps) {
  return (
    <span
      style={{ cursor: onClick && "pointer" }}
      className={`icon material-symbols-outlined ${className}`}
      onClick={onClick}
    >
      {icon}
    </span>
  );
}

export default Icon;
