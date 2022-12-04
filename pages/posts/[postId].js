import Link from 'next/link';
import React from 'react';

const PostDetails = ({ post }) => {
    console.log(post);
    return (
        <div className='text-center'>
            <Link href="/posts">
                <button className="btn btn-primary ">Back to Posts</button>
            </Link>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-7">
                <figure><img src={post.thumbnailUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.url}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getStaticProps = async (context) => {
    const { params } = context;
    console.log(params);
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.postId}`);
    const data = await res.json();
    return {
        props: {
            post: data
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=50");
    const post = await res.json();
    const paths = post.map(meal => {
        return {
            params: {
                postId: `${meal.id}`
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export default PostDetails;