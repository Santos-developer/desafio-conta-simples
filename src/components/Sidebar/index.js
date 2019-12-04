import React from "react";
import { NavLink } from "react-router-dom";
import Styled from "styled-components";
import { Sidebar, Menu, Title, Navigation, NavItem } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";
import Badge from "components/Badge";

const SideBadge = Styled(Badge)`
  right: 0;
  padding: .4em .4em;
  font-size: .6rem;
  border-radius: 10px;
`;

const RenderLinks = routes => {
  return routes.map((route, index) => (
    <NavItem key={index}>
      <FontAwesomeIcon icon={route.icon} />
      <NavLink to={route.layout + route.path}>
        <p>{route.name}</p>
        {route.badge && <SideBadge>{route.badge}</SideBadge>}
      </NavLink>
    </NavItem>
  ));
};

const RenderEasyAccessLinks = ({ routes }) => {
  const onlyEasyAccessRoutes = route =>
    route.layout === "/dashboard" && route.inSidebar && route.inEasyAccess;
  const easyAccessRoutes = routes.filter(onlyEasyAccessRoutes);
  return RenderLinks(easyAccessRoutes);
};

const RenderMoreLinks = ({ routes }) => {
  const onlyMoreRoutes = route => route.layout === "/dashboard" && route.inSidebar && route.inMore 
  const moreRoutes = routes.filter(onlyMoreRoutes);
  return RenderLinks(moreRoutes)
};

const MainSidebar = ({ routes }) => (
  <Sidebar>
    <Button fullWidth uppercase>
      Depositar
    </Button>
    <Title>Acesso rápido</Title>
    <Menu>
      <Navigation>
        <RenderEasyAccessLinks routes={routes} />
      </Navigation>
    </Menu>

    <Title>Mais</Title>
    <Menu>
      <Navigation>
        <RenderMoreLinks routes={routes} />
      </Navigation>
    </Menu>
  </Sidebar>
);

export default MainSidebar;
