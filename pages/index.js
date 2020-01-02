import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import Head from 'next/head';
import Layout from "../components/Layout";
import Link from "next/link";
import Clock from "../components/Clock";
import Navigation from "../components/Navigation";

const Index = () => (
    <Layout>
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                        <Clock/>
                    </div>
                </div>
            </div>
        </header>
    </Layout>
);

export default Index;