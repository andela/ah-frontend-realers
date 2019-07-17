/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Article from '../../commons/components/Article';
import ErrorLabel from '../../commons/components/ErrorLabel';
import '../CSS/RecommendedArticles.scss';
import ActionButton from './ActionButton';

function RecommendedArticles({ recommendedArticles, fetchStatus }) {
  return (
    <div className="recommended-articles">
      <h2 className="section-title">Recommended Articles</h2>
      {
        fetchStatus
          ? (
            <Container>
              <Row>
                <Col sm={4} lg>
                  <Article article={recommendedArticles[1]} />
                </Col>
                <Col sm={4} lg className="sm">
                  <Article article={recommendedArticles[2]} />
                  <Article article={recommendedArticles[3]} />
                  <Article article={recommendedArticles[4]} />
                </Col>
                <Col sm={4} lg>
                  <Article article={recommendedArticles[5]} />
                </Col>
              </Row>
              <ActionButton />
            </Container>
          )
          : (
            <ErrorLabel
              message="No Recommended Articles Fetched"
              tip="Try Refreshing this page"
            />
          )
      }
    </div>
  );
}

export default RecommendedArticles;
