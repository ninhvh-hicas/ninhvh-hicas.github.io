import React, { useEffect, useState } from "react";
import { Menu, Grid } from "antd";
import { NavLink } from "react-router-dom";
import { PieChartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { changeNavbarActive } from "./Actions";

const { useBreakpoint } = Grid;
const NavbarMenu = () => {
  const { md } = useBreakpoint();
  const dispatch = useDispatch();
  const navbarActive = useSelector((state) => state.navbarReducer.navbarActive);
  const { t } = useTranslation("common");
  const [current, setCurrent] = useState("home");
  const handleClick = (e) => {
    dispatch(changeNavbarActive(e.key));
  };
  useEffect(() => {
    setCurrent(navbarActive);
  }, [navbarActive]);

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={current}
      mode={md ? "horizontal" : "inline"}
    >
      <Menu.Item key="home">
        <NavLink to="/">
          <i className="fab fa-trello" />
        </NavLink>
      </Menu.Item>
      <Menu.Item key="booking">
        <NavLink to="/booking">
          <i style={{ paddingRight: "10px" }} className="far fa-file-alt"></i>
          {t("leftMenu.booking")}
        </NavLink>
      </Menu.Item>
      <Menu.Item key="front-desk">
        <NavLink to="/front-desk">
          <i style={{ paddingRight: "10px" }} className="fas fa-desktop"></i>
          {t("leftMenu.frontDesk")}
        </NavLink>
      </Menu.Item>
      <Menu.Item key="cashier">
        <NavLink to="/cashier">
          <i
            style={{ paddingRight: "10px" }}
            className="fas fa-cash-register"
          ></i>
          {t("leftMenu.cashier")}
        </NavLink>
      </Menu.Item>
      <Menu.Item key="channel">
        <NavLink to="/channel">
          <i style={{ paddingRight: "10px" }} className="fas fa-tv"></i>
          {t("leftMenu.channel")}
        </NavLink>
      </Menu.Item>
      <Menu.Item key="report">
        <NavLink to="/report">
          <PieChartOutlined />
          {t("leftMenu.report")}
        </NavLink>
      </Menu.Item>     
    </Menu>
  );
};

export default NavbarMenu;
