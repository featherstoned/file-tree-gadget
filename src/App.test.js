import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import App from './App';

test('toggles folder state on click', async () => {
  render(<App />);
  
  // Clicking on the folder should toggle its state
  const desktopFolders = screen.getAllByTestId('desktop-folder');

  expect(desktopFolders).toHaveLength(3); // Update the expected length

  act(() => {
    fireEvent.click(desktopFolders[0]); // Select the first element
  });
  
  await waitFor(() => {
    expect(screen.queryByText('Projects')).not.toBeInTheDocument();
  });
  
  act(() => {
    fireEvent.click(desktopFolders[0]); // Select the first element
  });
  
  await waitFor(() => {
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });
});




// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
