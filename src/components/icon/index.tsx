import { IconProps } from "./types";
function Icon({ icon, onClick, className, margin = "0" }: IconProps) {
  return (
    <span
      style={{ cursor: onClick && "pointer", margin }}
      className={`icon material-symbols-outlined ${className}`}
      onClick={onClick}
    >
      {icon}
    </span>
  );
}

export default Icon;
