import { defineField, defineType } from "sanity";

export const playlist = defineType({
  name: "playlist",
  title: "Playlist",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title", // Optional but adds readability
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug", // Optional but adds readability
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "select",
      title: "Select",
      type: "array",
      of: [{ type: "reference", to: [{ type: "startup" }] }],
    }),
  ],
});
