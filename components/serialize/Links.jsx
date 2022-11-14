export default function Links({ children, value }) {
  if (value._type === "internalLink")
    return (
      <a className="text-red-300 underline" href={value.reference.url}>
        {children}
      </a>
    );
  return (
    <a
      className="text-red-300 underline"
      target="_blank"
      rel="noreferrer"
      href={value.href}
    >
      {children}
    </a>
  );
}
