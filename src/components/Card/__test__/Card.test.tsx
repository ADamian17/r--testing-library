import { getDefaultNormalizer, render, screen } from '@testing-library/react';
import Card from '..';
import { cardMockData } from './mockData';

describe('Card Component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Card {...cardMockData} />);
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
    screen.getByTestId('card-title'); // getBy returns an error if it does not find the element
  });
  test('card copy should match props', () => {
    screen.getByTestId('card-copy'); // getBy returns an error if it does not find the element
  });

  describe('Card Image', () => {
    let cardImageEl: HTMLElement;

    beforeEach(() => {
      cardImageEl = screen.getByTestId('card-image');
    });

    test('card image src should not be empty', () => {
      expect(cardImageEl).toHaveAttribute(
        'src',
        cardMockData.cardImage.mediaItemUrl
      );
    });

    test('card image alt should not be empty', () => {
      expect(cardImageEl).toHaveAttribute(
        'alt',
        cardMockData.cardImage.altText
      );
    });
  });
});
