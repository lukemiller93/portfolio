// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import blogPost from "./documents/blogPost";
import person from "./documents/person";
import siteSettings from "./documents/siteSettings";
import bioPortableText from "./objects/bioPortableText";
import figure from "./objects/figure";
import sponsor from "./objects/sponsor";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /**
     * When added to this list, object types can be used as
     * {type: 'typename'} in other document types
     */
    bioPortableText,
    figure,
    /**
     * The following types are document types which will appear
     * in the studio
     */
    person,
    siteSettings,
    blogPost,
    sponsor
  ])
});
