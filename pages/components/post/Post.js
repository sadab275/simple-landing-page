import Link from "next/link";

const Post = ({ post }) => {
    return (
        <div className="card card-compact w-96 bg-info shadow-xl">
            <figure><img src={post.thumbnailUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <div className="card-actions justify-end">
                    <Link href={`/posts/${post?.id}`}>
                        <button className="btn btn-primary">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;