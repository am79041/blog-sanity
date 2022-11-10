import SanityClient from "@sanity/client";

export const config = {
  projectId: "wpcn3siq",
  dataset: "production",
  apiVersion: "v1",
  useCdn: false,
};

export const client = SanityClient(config);
