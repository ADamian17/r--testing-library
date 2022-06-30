import React from 'react';

type CardProps = {
  cardCopy: string;
  cardHeader: string;
  cardTitle: string;
  cardImage: {
    altText: string;
    mediaItemUrl: string;
  };
};

const Card: React.FC<CardProps> = ({
  cardCopy,
  cardHeader,
  cardTitle,
  cardImage,
}) => (
  <div data-testid="card">
    <h1 data-testid="card-header">{cardHeader}</h1>
    <h2
      data-testid="card-title"
      dangerouslySetInnerHTML={{ __html: cardTitle }}
    />
    <p>{cardCopy}</p>

    <img
      data-testid="card-image"
      src={cardImage.mediaItemUrl}
      alt={cardImage.altText}
    />
  </div>
);

export default Card;
