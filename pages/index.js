import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import Clock from "../components/Clock";
import Link from "next/link";

const Index = () => (
    <div className="main-area center-text">
        <div className="display-table">
            <div className="display-table-cell">

                <h1 className="title"><b>&#8734;</b></h1>
                <p className="desc font-white">"Being deeply loved by someone gives you strength, while loving someone
                    deeply gives you courage." - Lao Tzu</p>

                <Clock/>

                <div className="navigation-area">
                    <Link href="/gallery">
                        <a className='gallery-btn'>gallery</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default Index;