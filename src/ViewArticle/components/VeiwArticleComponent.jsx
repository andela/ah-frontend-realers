import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Ratings from '../../commons/assets/images/ratings.png';
import Avarta from '../../commons/assets/images/avarta.jpg';
import '../ViewArticleStyles/ViewArticle.scss';

const ViewArticleComponent = ({ singleArticle }) => (
  <div>
    <div className="header">
      <h3 className="article_title">{singleArticle.title}</h3>
    </div>
    <div className="flex-container">
      <div className="top-div-inner custom-profile">
        <div>
          <img src={Avarta} className="avarta-image" alt="avarta" />
        </div>
        <div className="author-info">
          {singleArticle.author && (
            <b className="author-name-color">
              { singleArticle.author.username }
            </b>
          )}
          <br />
          <button className="follow-button" type="button">Follow</button>
          <br />

          {singleArticle.createdAt && (
          <p className="date-color">
            {moment(singleArticle.createdAt.slice(0, 10)).format(
              'LL',
            )}
          </p>
          )}
        </div>
      </div>
      <div className="top-div-inner custom-ratings">
        <img src={Ratings} className="ratings-image" alt="ratings" />
      </div>
    </div>
    <div className="myimage">
      <img src={singleArticle.image} className="article_image" alt="article" />
    </div>
    <br />
    <div className="article-content">
      <p className="article">{singleArticle.body}</p>
    </div>
    <p>
      {singleArticle.author && (
        <b>
          { singleArticle.author.image }
        </b>
      )}
    </p>
  </div>

);

ViewArticleComponent.defaultProps = {
  singleArticle: PropTypes.shape(PropTypes.object.isRequired),
};

ViewArticleComponent.propTypes = {
  singleArticle: PropTypes.shape(PropTypes.object.isRequired),
};

export default ViewArticleComponent;
