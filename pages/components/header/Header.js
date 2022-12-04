import Link from "next/link";

const Header = () => {
    return (
        <div className="">
            <div className="navbar bg-accent">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">FoodBox</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <Link href="/posts"><li><a>See all Foods</a></li></Link>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;