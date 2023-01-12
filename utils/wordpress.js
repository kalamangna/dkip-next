const BASE_URL = "https://dkip.sinjaikab.go.id/dkip/wp-json/wp/v2"

export async function getPosts() {
  const postsRes = await fetch(BASE_URL + "/posts?_embed")
  const posts = await postsRes.json()
  return posts
}
