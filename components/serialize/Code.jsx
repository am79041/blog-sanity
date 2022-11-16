import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function Code({ value }) {
  return (
    <SyntaxHighlighter
      style={dracula}
      customStyle={{
        padding: "20px",
        borderRadius: "8px",
      }}
      language={value.language}
    >
      {value.code}
    </SyntaxHighlighter>
  );
}
