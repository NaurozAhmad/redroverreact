import { render, screen, cleanup, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from 'routes/login/Login';

let container: any = null;

test('should render login page', () => {
  act(() => {
    container = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    ).container;
  });
  // container = render(<Login />).container;
  // expect(container).toMatchSnapshot();
  expect(screen.getByText('Login')).toBeInTheDocument();
  expect(screen.getByTestId('loginform')).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
  expect(screen.getByTestId('l-password')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
});
