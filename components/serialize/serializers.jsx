import Code from "./Code";
import Links from "./Links";
import dynamic from "next/dynamic";
import EmbedComponent from "../PreviewEmbed/EmbedComponent";

const Preview = dynamic(() => import("../PreviewEmbed/EmbedComponent"), {
  ssr: false,
});

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
    embedPost: Preview,
  },
};

export default serializers;
