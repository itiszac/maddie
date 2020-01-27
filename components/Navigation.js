import "../public/nav.css";
import Link from "next/link";

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link href="/" passHref>
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/gallery" passHref>
                    <a>Gallery</a>
                </Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;