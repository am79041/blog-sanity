import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";

export default function EmbedComponent({ value }) {
  const { key, url } = value;
  if (!key || !url) {
    return <p>Loading...</p>;
  }

  let PreviewComponent = "";
  switch (key) {
    case "insta":
      PreviewComponent = <InstagramEmbed url={url} />;
      break;
    case "youtube":
      PreviewComponent = <YouTubeEmbed url={url} />;
      break;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {PreviewComponent}
    </div>
  );
}
