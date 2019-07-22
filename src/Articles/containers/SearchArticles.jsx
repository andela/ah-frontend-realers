import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Article from '../../commons/components/Article';
import fetchSearchedArticles from '../redux/actions/SearchArticlesAction';
import '../CSS/SearchArticles.scss';
import ErrorLabel from '../../commons/components/ErrorLabel';
import Loading from '../../commons/components/Loading';

export class SearchArticles extends Component {
  componentDidMount() {
    const { match: { params: { searchkey } }, getSearchedArticles } = this.props;

    getSearchedArticles(searchkey);
  }

  render() {
    const { items, match: { params: { searchkey } }, isSearching } = this.props;
    return (
      <div className="search-articles">
        {
        isSearching === true
          ? <Loading />
          : (
            <Container>
              {items.length !== 0 ? (
                <div>
                  <h2 className="section-title">{`Search Results For - '${searchkey}' `}</h2>
                  <div className="article-display-box">
                    {items.map(article => (
                      <Article key={article.slug} article={article} />
                    ))}
                  </div>
                </div>
              ) : (
                <ErrorLabel
                  message={`Your search - '${searchkey}' did not match any of the articles`}
                  tip="Try again with another word"
                />
              )}
            </Container>
          )
        }
      </div>
    );
  }
}

SearchArticles.propTypes = {
  items: PropTypes.array,
  match: PropTypes.object.isRequired,
  isSearching: PropTypes.bool,
  getSearchedArticles: PropTypes.func.isRequired,
};

SearchArticles.defaultProps = {
  items: [],
  isSearching: false,
};

export const mapStateToProps = state => {
  const { isSearching, items } = state.searchedArticles;
  return { isSearching, items };
};

export const mapDispatchToProps = dispatch => ({
  getSearchedArticles: (searchedKey) => {
    dispatch(fetchSearchedArticles(searchedKey));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchArticles);
