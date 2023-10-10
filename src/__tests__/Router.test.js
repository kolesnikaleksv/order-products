import { fireEvent, render, screen } from "@testing-library/react";
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import Sidebar from "../components/sidebar/sidebar";
import Product from "../components/Product/Product";
import Groups from "../components/Groups/Groups";
import Users from "../components/Users/Users";
import Settings from "../components/Settings/Settings";
import App from '../components/App/App';
import TestRouterHelper from "../helpers/testRouterHelper";

describe('TEST APP', () => {
  test('Router test', () => {
    render(
      <MemoryRouter>
        <NavigationMenu />
        <Sidebar />
      </MemoryRouter>
    );

    const mainLink = screen.getByTestId('main-link');
    
    fireEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  })

  test('test redirect to Product page', () => {
    render(TestRouterHelper(<Product/>));

    const productLink = screen.getByTestId('product-link');

    fireEvent.click(productLink);
    expect(screen.getByTestId('product-page')).toBeInTheDocument();

  });

  test('test redirect to Groups page', () => {
    render(TestRouterHelper(<Groups/>));

    const groupsLink = screen.getByTestId('groups-link');
    fireEvent.click(groupsLink);
    expect( screen.getByTestId('groups-page')).toBeInTheDocument();

  });

  test('test redirect to Users page', () => {
    render(TestRouterHelper(<Users/>));
    const usersLink = screen.getByTestId('users-link');

    fireEvent.click(usersLink);
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
  });

  test('test redirect to Users page', () => {
    render(TestRouterHelper(<Settings/>));
    const setsLink = screen.getByTestId('sets-link');
    
    fireEvent.click(setsLink);
    expect(screen.getByTestId('sets-page')).toBeInTheDocument();
  });

  test('Error page test', () => {
    render(
      <MemoryRouter initialEntries={['/asdf']}>
        <App />
      </MemoryRouter>
    );
 
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  })
})