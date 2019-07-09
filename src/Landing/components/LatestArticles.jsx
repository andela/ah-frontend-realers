/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Article from '../../commons/components/Article';
import ErrorLabel from '../../commons/components/ErrorLabel';
import '../CSS/RecommendedArticles.scss';
import ActionButton from './ActionButton';

function LatestArticles({ latestArticles, fetchStatus }) {
  return (
    <div className="recommended-articles">
      <h2 className="section-title">Latest Articles</h2>
      {
        fetchStatus
          ? (
            <Container>
              <div className="article-display-box">
                {
                  latestArticles.map(article => (
                    <Article key={article.slug} article={article} />
                  ))
                }
              </div>
              <ActionButton />
            </Container>
          )
          : (
            <ErrorLabel
              message="No Latest Articles Fetched"
              tip="Try Refreshing this page"
            />
          )
      }
    </div>
  );
}

LatestArticles.propTypes = {
  latestArticles: PropTypes.any.isRequired,
};

export default LatestArticles;
