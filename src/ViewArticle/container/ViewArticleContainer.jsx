import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleAction from '../redux/Actions/ViewArticleAction';
import ViewArticleComponent from '../components/VeiwArticleComponent';

export class ArticleContainer extends React.Component {
  componentDidMount() {
    const {
      match,
      getSingleArticle,
    } = this.props;
    const { slug } = match.params;
    getSingleArticle(slug);
  }

  render() {
    const { viewAnArtricle } = this.props;
    return (
      <ViewArticleComponent singleArticle={viewAnArtricle.singleArticle} />
    );
  }
}

ArticleContainer.defaultProps = {
  match: PropTypes.shape(PropTypes.object.isRequired),
  viewAnArtricle: PropTypes.shape(PropTypes.object.isRequired),
  singleArticle: PropTypes.shape(PropTypes.object.isRequired),
};

ArticleContainer.propTypes = {
  getSingleArticle: PropTypes.func.isRequired,
  match: PropTypes.shape(PropTypes.object.isRequired),
  viewAnArtricle: PropTypes.shape(PropTypes.object.isRequired),
  singleArticle: PropTypes.shape(PropTypes.object.isRequired),
};

const mapStateToProps = state => ({
  viewAnArtricle: state.viewAnArtricle,
});

export default connect(mapStateToProps, { getSingleArticle: ArticleAction })(ArticleContainer);
