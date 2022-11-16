export default function Links({ children, value }) {
  if (value._type === "internalLink")
    return (
      <a
        className="no-underline text-blue-300 hover:text-blue-400 hover:underline"
        href={value.reference.url}
      >
        {children}
      </a>
    );
  return (
    <a
      className="no underline text-blue-400 hover:text-red-500 hover:underline"
      target="_blank"
      rel="noreferrer"
      href={value.href}
    >
      {children}
    </a>
  );
}
