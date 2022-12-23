import { render } from '@testing-library/react';
import { Home } from './Home';

//test block
test('Should render without errors', () => {
  expect(() => render(<Home />)).toBeTruthy();
});
