import { render, screen } from '@testing-library/react';

import { cardMockData } from './mockData';
import Card from '..';

describe('Card Component', () => {
  beforeEach(() => render(<Card {...cardMockData} />));
  test('should be in the document', () => {
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  test('card header should match props', () => {
    expect(screen.getByTestId('card-header')).toHaveTextContent(
      cardMockData.cardHeader
    );
  });
});

test('card header should embed html', () => {
  const props = { ...cardMockData, cardTitle: `<p>sljdfhksdhfkj</p>` };
  render(<Card {...props} />);
  const html = '<p>sljdfhksdhfkj</p>';

  expect(screen.getByTestId('card-title')).toContainHTML(html);
});

test('card image should have src attr', () => {
  const props = {
    ...cardMockData,
  };
  render(<Card {...props} />);
  screen.debug(screen.getByTestId('card-image'));

  expect(screen.getByTestId('card-image')).toHaveAttribute(
    'src',
    expect.stringMatching(cardMockData.cardImage.mediaItemUrl)
  );
});
