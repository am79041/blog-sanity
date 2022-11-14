import Code from "./Code";
import Links from "./Links";

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
