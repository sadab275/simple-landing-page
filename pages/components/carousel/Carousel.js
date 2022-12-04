import Link from "next/link";


const Carousel = () => {
    return (
        <div>
            <div className="card lg:card-side bg-red-300 my-7">
                <div className="w-1/2">
                    <figure><img src="https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg" alt="Album" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <Link href="/posts">
                            <button className="btn btn-primary">See All Posts</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;