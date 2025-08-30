import React from 'react';

export const NavLink = ({ to, children, ...props }) => (
  <a href={to} {...props}>{children}</a>
);

export const Link = ({ to, children, ...props }) => (
  <a href={to} {...props}>{children}</a>
);

export const BrowserRouter = ({ children }) => <div>{children}</div>;
export const Routes = ({ children }) => <div>{children}</div>;
export const Route = ({ element }) => element;
export const useNavigate = () => jest.fn();
export const useLocation = () => ({ pathname: '/' });