import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon, // Add a comma here
  fields: [
    defineField({
      name: "id",
      title: "ID", // Optional but adds readability
      type: "number",
    }),
    defineField({
      name: "name",
      title: "Name", // Optional but adds readability
      type: "string",
    }),
    defineField({
      name: "username",
      title: "Username",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "url",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
