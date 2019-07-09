/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../CSS/Article.scss';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

function Article({ article, article: { author } }) {
  const authors = article.author;
  let authorsName = 'author username';
  let createdAt = '';

  if (authors !== undefined) {
    authorsName = authors.username;
    createdAt = new Date(article.createdAt).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }

  return (
    <div>
      <Card className="article-box">
        <Card.Img variant="top" src={article.image} />
        <Card.Body>
          <Link to={`/article/${article.slug}`}>
            <Card.Title>
              {article.title}
            </Card.Title>
          </Link>
          <Card.Text>
            {article.body}
          </Card.Text>
          <StarRatingComponent
            name="rate2"
            editing={false}
            renderStarIcon={() => <span>★</span>}
            starCount={5}
            value={article.average_rating}
          />
          <Row>
            <Col xs={6} className="left">
              <Card.Link href="#">
                {authorsName}
              </Card.Link>
            </Col>
            <Col xs={6} className="right">
              <Card.Link href="#">
                {createdAt}
              </Card.Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

Article.propTypes = {
  article: PropTypes.object,
};


Article.defaultProps = {
  article: {},
};

export default Article;
