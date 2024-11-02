import { defineField, defineType } from "sanity";

export const startup = defineType({
  name: "startup",
  title: "Startup",
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
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "views",
      title: "Views",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) =>
        Rule.min(1).max(20).required().error("Plese enter a category"),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pitch",
      title: "Pitch",
      type: "markdown",
    }),
  ],
});
