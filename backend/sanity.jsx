import SanityClient from "@sanity/client";

export const config = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  token: process.env.NEXT_PUBLIC_EDITOR_TOKEN,
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
  useCdn: !process.env.NEXT_PUBLIC_USE_CDN,
};

export const client = SanityClient(config);
