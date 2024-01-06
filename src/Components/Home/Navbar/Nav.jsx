import { Button, Navbar } from "keep-react";

import { MagnifyingGlass } from "phosphor-react";
import webIcon from '../../../assets/webicon.png'
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <Navbar fluid={true}>
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container className="flex items-center">
            <Navbar.Brand>
             <div className="flex items-center ">
             <img
                src={webIcon}
                
                width="100"
                height="40"
              />
              <h2 className="text-2xl font-bold satisfy text-red-500 mr-5">LuxeBlossom</h2>
             </div>
      
            </Navbar.Brand>
            <Navbar.Divider></Navbar.Divider>
            <Navbar.Container
              tag="ul"
              className="xl:flex hidden items-center justify-between gap-8"
            >
            <Link to='/'>  <Navbar.Link linkName="Makeup" /></Link>
            <Link to='/clothes'>  <Navbar.Link linkName="Clothes" /></Link>
              <Navbar.Link linkName="About" />
            </Navbar.Container>
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5 ">
                <Navbar.Link  linkName="Makeup" />
                <Link to='/clothes'>  <Navbar.Link linkName="Clothes" /></Link>
                <Navbar.Link  linkName="Blogs" />
                <Navbar.Link  linkName="News" />
                <Navbar.Link  linkName="Resources" />
              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>
  
          <Navbar.Container className="flex gap-2">
            <Button size="sm" type="link">
              <span>
                <MagnifyingGlass size={20} color="#444" />
              </span>
              <span className="ml-2 text-metal-600">Search</span>
            </Button>
            <Button size="sm" type="primary">
              Contact
            </Button>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    );
};

export default Nav;