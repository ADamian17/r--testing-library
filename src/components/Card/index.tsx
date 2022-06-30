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
  <div>
    <h1>{cardHeader}</h1>
    <h2>{cardTitle}</h2>
    <p>{cardCopy}</p>

    <img src={cardImage.mediaItemUrl} alt={cardImage.altText} />
  </div>
);

export default Card;
