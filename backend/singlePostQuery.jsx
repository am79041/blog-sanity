export const query = `*[_type=="post" && slug.current == $slug][0]{
        "previousPost" : *[_type=="post" && _updatedAt > ^._updatedAt] | order(_updatedAt asc)[0]{
          title, "slug" : slug.current,
        },
        "nextPost" : *[_type=="post" && _updatedAt < ^._updatedAt] | order(_updatedAt desc)[0]{
          title, "slug" : slug.current,
        },
        _id, title, _createdAt, _updatedAt, description, 
        author->{
        "name":fullName,
         authorImg{
           asset->{
            "url":url 
           }
          }
        },
        postImage{
          "alt":alt,
          "url":asset->url
        },
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
