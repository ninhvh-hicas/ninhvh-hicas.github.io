import React, { Component } from "react";
import NavBarMenu from "./NavbarMenu";
import "./NavbarStyle.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onUser: false,
      visible: false,
    };
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  handleSubmitUser = (params) => {
    this.setState({
      onUser: params,
    });
  };

  handleClick = () => {
    this.props.changeNavbarActive("home");
  };

  render() {
    const { user } = this.props;
    const showBoardMember = user.info.roles.includes("Member");
    return (
      <nav className="menuBar">        
        {!showBoardMember && (
          <div className="navbarMenu">
            <NavBarMenu />
          </div>
        )}
{/*         
        <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title="MENU"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <DrawerMenu />
          <hr />
          <DrawerMenuMini handle={this.handleSubmitUser} />
        </Drawer> */}
      </nav>
    );
  }
}

export default Navbar;
