import Layout from "../components/Layout";
import Link from "next/link";

export default function About() {
    return (
        <Layout>
            <Link prefetch href="/">
                <a>home</a>
            </Link>
            <p>This is the about page..</p>
            <img src='/images/allthatshabu.jpg'/>
        </Layout>
    );
};