import { Link } from "react-router-dom";
import { cloneElement } from "react";
import "./Button.scss";

export default function Button({
  variant = "primary",
  iconPosition = "right",
  justify,
	className,
	style,
  size = "md",
  strokeWidth = 1,
  nonScalingStroke = true,
  icon,
  color,
  to,
  href,
  children,
  ...props
}) {
  const Tag = to ? Link : href ? "a" : "button";

  return (
    <Tag
      className={`btn btn--${variant} btn--${size} ${justify ? `btn--justify-${justify}` : ""} ${className ?? ""}`}
			style={{...(color && { "--btn-color": color }), ...style}}
      to={to}
      href={href}
      {...props}
    >
      {icon && (
        <span className="btn__icon">
          {cloneElement(icon, { strokeWidth, nonScalingStroke })}
        </span>
      )}
      {children}
    </Tag>
  );
}
