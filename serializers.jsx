import Links from "./components/Links";
import Code from "./components/Code";

const serializers = {
  marks: {
    internalLink: ({ children, value }) => (
      <Links value={value}>{children}</Links>
    ),
    externalLink: ({ children, value }) => (
      <Links value={value}>{children}</Links>
    ),
  },
  types: {
    code: ({ value }) => <Code value={value} />,
  },
};

export default serializers;
