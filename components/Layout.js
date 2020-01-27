import Navigation from "./Navigation";

const Layout = props => (
    <div className="container align-content-center">
        {/*<Navigation/>*/}
        {props.children}
    </div>
);

export default Layout;