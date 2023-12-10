import Link from "next/link";
import React from "react";

const DetailPage = async ({ params }) => {
    // console.log(params?.id);

    const res = await fetch(`http://localhost:4008/posts/${params?.id}`);
    const post = await res.json();
    // console.log(post);

    return (
        <div className=" flex justify-center items-center h-screen">
            <div
                key={post?.id}
                className="card w-[720px] bg-cyan-800 shadow-xl text-white"
            >
                <div className="card-body">
                    <h2 className="card-title">{post?.title}</h2>
                    <p>{post?.description}</p>
                    <p>Likes: {post?.likes_count}</p>
                    <Link href="/posts">
                        {" "}
                        <button className="btn btn-accent bg-cyan-600 text-white mt-4">
                            See More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
