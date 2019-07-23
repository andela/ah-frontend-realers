import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import Article from "../../commons/components/Article";
import { connect } from "react-redux";
import getAllArticles from "../redux/actions/AllArticlesActions";
import '../CSS/AllArticles.scss';

export class AllArticles extends Component {
  componentDidMount() {
    const { getArticles } = this.props;
    getArticles();
  }
  render() {
    const { items } = this.props
    return (
      <div className='view-all-articles'>
        <Container>
          {items.length != 0 ? (
            <div className='article-display-box'>
              {items.map(article => (
                <Article key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <h3 className='no-articles'>No Articles Available</h3>
          )}
        </Container>
      </div>
    );
  }
}

AllArticles.propTypes = {
  allArticles: PropTypes.any,
  isRetrieving: PropTypes.bool
};

AllArticles.defaultProps = {
  allArticles: [],
  isRetrieving: false
};

export const mapStateToProps = state => {
  const { isRetrieving, items } = state.allArticleReducer;
  return { isRetrieving, items };
};

export const mapDispatchToProps = dispatch => ({
  getArticles: () => {
    dispatch(getAllArticles());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllArticles);
