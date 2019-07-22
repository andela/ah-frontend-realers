import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Article from '../../commons/components/Article';
import getAllArticles from '../redux/actions/AllArticlesActions';
import '../CSS/AllArticles.scss';
import Pagination from './paginationComponent';

export class AllArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
    };
  }

  componentDidMount() {
    const { getArticles } = this.props;
    getArticles();
  }

  changePage = (apiCallUrl, increaseOrDecreasePageNumber) => {
    const { getArticles } = this.props;
    const { pageNumber } = this.state;
    this.setState({
      pageNumber: pageNumber + increaseOrDecreasePageNumber,
    });

    getArticles(apiCallUrl);
  };

  render() {
    const {
      items, count, next, previous,
    } = this.props;
    const { pageNumber } = this.state;
    return (
      <div className="view-all-articles">
        <Container>
          <div className="myArticlu">
            {items.length != 0 ? (
              <div className="article-display-box">
                {items.map(article => (
                  <Article key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <h3 className="no-articles">No Articles Available</h3>
            )}
          </div>
          <Pagination
            paginate={this.changePage}
            currentPage={pageNumber}
            count={count}
            next={next}
            previous={previous} />
        </Container>
      </div>
    );
  }
}

AllArticles.propTypes = {
  allArticles: PropTypes.any,
  isRetrieving: PropTypes.bool,
  count: PropTypes.number,
  next: PropTypes.string,
  previous: PropTypes.string,
};

AllArticles.defaultProps = {
  allArticles: [],
  isRetrieving: false,
  count: 0,
  next: '',
  previous: '',
};

export const mapStateToProps = state => {
  const {
    isRetrieving, items, count, next, previous,
  } = state.allArticleReducer;
  return {
    isRetrieving, items, count, next, previous,
  };
};

export const mapDispatchToProps = dispatch => ({
  getArticles: (url) => {
    dispatch(getAllArticles(url));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllArticles);
