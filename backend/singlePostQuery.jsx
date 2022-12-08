const singlePostQuery = `*[_type=="post" && slug.current == $slug][0]{
        "previousPost" : *[_type=="post" && _updatedAt > ^._updatedAt] | order(_updatedAt asc)[0]{
          title, "slug" : slug.current,
        },
        "nextPost" : *[_type=="post" && _updatedAt < ^._updatedAt] | order(_updatedAt desc)[0]{
          title, "slug" : slug.current,
        },
        _id, title, _updatedAt, description, 'tags' : tags[]->{_id, title,'slug':slug.current}, postLikes, postComments,
        'author' : author->fullName,
          body[]{
            ...,
            markDefs[]{
              ...,
              _type=='internalLink' => {
                ...,
                reference->{
                  "url":"http://localhost:3000/blog/" + slug.current
              }
             }
            }
           },
      }`;
export default singlePostQuery;
