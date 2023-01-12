import Image from "next/image"
import Link from "next/link"
import { getDate } from "../utils/utils"

export default function Post({ post }) {
  console.log("post", post)

  return (
    <div className="card mb-3">
      <Link href={`/posts/${post.slug}`}>
        <Image
          src={
            post._embedded["wp:featuredmedia"]?.[0].source_url ||
            "https://placehold.co/200"
          }
          width={200}
          height={200}
          alt={post.title.rendered}
          class="card-img-top img-fluid img"
        />
      </Link>

      <div className="card-body">
        <h5 className="card-title">{post.title.rendered}</h5>
        <div
          className="card-text"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        ></div>
        <p className="card-text">
          <small className="text-muted">On {getDate(post.modified)}</small>
        </p>
        <Link href={`/posts/${post.slug}`}>
          <div className="btn btn-primary">See more</div>
        </Link>
      </div>
    </div>
  )
}
