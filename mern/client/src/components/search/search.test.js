import React from 'react';
import Search from './search';
import { render, screen } from '@testing-library/react';
 
test('check counter', ()=> {
  const { getByText } = render(<Search />);
  const button = getByText("Submit");
  expect(button).toBeTruthy()
});

