 


import { Outlet } from 'react-router-dom';
import Nav from '../Components/Home/Navbar/Nav'
import Footer from '../Components/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;