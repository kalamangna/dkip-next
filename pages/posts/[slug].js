import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { getPost, getSlugs } from "../../utils/wordpress"

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>DKIP Next | {post.title.rendered}</title>
        <meta name="description" content={post.title.rendered} />
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="text-center pb-5">{post.title.rendered}</h1>

            <Image
              src={
                post._embedded["wp:featuredmedia"]?.[0].source_url ||
                "https://placehold.co/200"
              }
              width={300}
              height={300}
              alt={post.title.rendered}
              className="img-fluid"
            />

            <div
              className="card-text"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></div>

            <Link href="/">
              <div className="btn btn-primary">Back to Home</div>
            </Link>
          </div>

          <div className="col-lg-4">test</div>
        </div>
      </div>
    </>
  )
}

// hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs("posts")

  return {
    paths,
    // this option below renders in the server (at request time) pages that were not rendered at build time
    // e.g when a new blogpost is added to the app
    fallback: "blocking",
  }
}

// access the router, get the id, and get the data for that post
export async function getStaticProps({ params }) {
  const post = await getPost(params.slug)

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  }
}
