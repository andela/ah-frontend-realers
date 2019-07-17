/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../CSS/Landing.scss';
import RecommendedArticles from '../components/RecommendArticles';
import LatestArticles from '../components/LatestArticles';
import fetchLatestArticles from '../redux/actions/latestArticlesAction';
import Loading from '../../commons/components/Loading';

export class Landing extends Component {
  componentWillMount() {
    this.props.fetchLatestArticles();
  }

  render() {
    const {
      latestArticles,
      recommendedArticles,
      fetchStatus,
      isFetching,
    } = this.props;

    return (
      <div className="landing">
        {
        isFetching === true
          ? <Loading />
          : (
            <div>
              <RecommendedArticles
                recommendedArticles={recommendedArticles}
                fetchStatus={fetchStatus}
              />
              <LatestArticles
                latestArticles={latestArticles}
                fetchStatus={fetchStatus}
              />
            </div>
          )
        }
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  latestArticles: state.latest_articles.items,
  recommendedArticles: state.latest_articles.items,
  fetchStatus: state.latest_articles.status,
  isFetching: state.latest_articles.is_fetching,
});

export default connect(mapStateToProps, { fetchLatestArticles })(Landing);
