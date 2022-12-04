import Link from "next/link";
import Header from "../components/header/Header";
import Post from "../components/post/Post";

const Posts = ({ posts }) => {
    console.log(posts);
    return (
        <div>
            <h2 className="text-3xl text-center my-5">Intotal elements: {posts.length}</h2>
            <div className="text-center">
                <Link href="/">
                    <button className="btn btn-primary ">Back to Home</button>
                </Link>
            </div>
            <div className="grid gap-4 grid-cols-3 my-5 mx-5">
                {
                    posts.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>

        </div>
    );
};

export default Posts;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=50");
    const data = await res.json();
    return {
        props: {
            posts: data
        }
    }
}