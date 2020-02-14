import Link from "next/link";

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/gallery">
                    <a>Gallery</a>
                </Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;