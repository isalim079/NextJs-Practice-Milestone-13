import Link from "next/link";
import React from "react";

export async function generateStaticParams() {

    const res = await fetch("http://localhost:4008/posts"); // statically load all data of from the server
    const post = await res.json()

    return [{ id: "1"}, { id: "2" }]
}

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
                            Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
