import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import React from 'react';
import Results from './results';
import App from '../App';

test('Render count results', () => {
  render(<App />);
  const count = screen.getByTestId('count-number');
  const submitButton = screen.getByTestId('submit-count');
  fireEvent.click(submitButton);
  expect(count).toBeEmptyDOMElement();
})



test("API call with a given URL", async () => {
  const URL = 'https://swapi.dev/api/people';
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(URL)
    })
  );
});