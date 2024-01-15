import Link from "next/link";
import React from "react";

const PostsPage = async () => {
    const res = await fetch("http://localhost:4008/posts", {
        // next: {
        //     revalidate: 5,
        // }
        cache: "no-store",
    });
    const posts = await res.json();
    console.log(posts);

    return (
        <div>
            <h1 className="text-center mt-10 text-3xl font-medium underline">
                Total Post: {posts.length}
            </h1>

            <div className="grid grid-cols-3 gap-10 p-10">
                {posts.map((post) => (
                    <div key={post?.id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{post?.title}</h2>
                            <p>{post?.description}</p>
                            <p>Likes: {post?.likes_count}</p>
                            <div className="card-actions justify-end">
                                <Link href={`/posts/${post?.id}`}>
                                    {" "}
                                    <button className="btn btn-accent text-white">
                                        See More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostsPage;
