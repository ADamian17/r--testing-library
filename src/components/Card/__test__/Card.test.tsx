import { render, screen } from '@testing-library/react';

import { cardMockData } from './mockData';
import Card from '..';

interface SetupProps<T = {}> {
  (props: T): void;
}

const setup: SetupProps = (props) => {
  const internalProps = { ...cardMockData, ...props };
  render(<Card {...internalProps} />);
};

describe('Card Component', () => {
  beforeEach(() => {
    setup(cardMockData);
  });

  test('should be in the document', () => {
    // getBy returns an error if it does not find the element;
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
  test('card header should match props', () => {
    expect(screen.getByTestId('card-header')).toHaveTextContent(
      cardMockData.cardHeader
    );
  });
  test('card title should match props', () => {
    screen.getByTestId('card-title');
  });
  test('card copy should match props', () => {
    screen.getByTestId('card-copy');
  });
});

describe('Card Component Image', () => {
  // https://jestjs.io/docs/expect#expectstringmatchingstring--regexp
  // https://github.com/testing-library/jest-dom#tohaveattribute
  test('card image src should match props', () => {
    setup(cardMockData);
    expect(screen.getByTestId('card-image')).toHaveAttribute(
      'src',
      cardMockData.cardImage.mediaItemUrl
    );
  });

  test('card image alt should match props', () => {
    setup(cardMockData);
    expect(screen.getByTestId('card-image')).toHaveAttribute(
      'alt',
      cardMockData.cardImage.altText
    );
  });

  test('card image should not have src', () => {
    setup({
      cardImage: {
        ...cardMockData.cardImage,
        mediaItemUrl: null,
      },
    });

    // screen.debug(screen.getByTestId('card-image'));
    expect(screen.getByTestId('card-image')).not.toHaveAttribute('src');
  });

  test('card image should not have alt', () => {
    setup({
      cardImage: {
        ...cardMockData.cardImage,
        altText: null,
      },
    });

    // screen.debug(screen.getByTestId('card-image'));
    expect(screen.getByTestId('card-image')).not.toHaveAttribute('alt');
  });
});
