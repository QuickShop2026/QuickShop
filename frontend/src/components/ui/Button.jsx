function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-5 py-2
        rounded-lg
        font-medium
        transition-all
        duration-200
        bg-blue-600
        hover:bg-blue-700
        text-white
        disabled:bg-gray-400
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;