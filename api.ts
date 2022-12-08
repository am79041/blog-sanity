import { writeFile, readFile } from 'fs/promises'
import path from 'path'
import { client } from './backend/sanity'

let tags: any

export default {
  list: async () => {
    const query = `*[_type=='tags']{
      [title]:  *[_type == 'post' && references(^._id)]
    }`
    const postByTags = await client.fetch(query)
    console.log(postByTags)
  },
  cache: {
    get: async (slug: any) => {
      const data = await readFile(path.join(process.cwd(), 'tags.db'))
      const tags = JSON.parse(data as unknown as string)
      return tags.find((tag: any) => tag.slug == slug)
    }
  },
}
