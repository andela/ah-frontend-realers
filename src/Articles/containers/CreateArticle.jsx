import {
  Form, Row, Col, Button, ProgressBar,
} from 'react-bootstrap';
import React from 'react';
import '../CSS/CreateArticle.scss';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loader';
import PropTypes from 'prop-types';
import { storage } from '../../commons/Util/FirebaseConfig';
import postAnArticle from '../redux/actions/CreateArticleAction';
import ErrorLabel from '../../commons/components/ErrorLabel';
import SuccessLabel from '../../commons/components/SuccessLabel';
import { TITLE_REGEX, BODY_REGEX, TAGS_REGEX } from '../constants';

export class CreateArticle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFieldInvalid: {
        title: null,
        body: null,
        tags: null,
      },
      articleTitle: '',
      articleBody: '',
      articleTags: '',
      uploadProgress: 0,
      uploadError: 'No Error',
      displayProgress: 'none',
      isFormValid: false,
      articlePhoto: {
        name: 'No Photo selected',
        data: null,
      },
    };
  }

  componentWillMount() {
    const token = localStorage.getItem('user_token');
    if (token === null) {
      window.location = '/login';
    }

    return true;
  }

  handleCreateArticle = (event) => {
    event.preventDefault();
    const {
      articleTitle, articleBody, articleTags, articlePhoto,
    } = this.state;
    const articleData = {
      article: {
        title: articleTitle,
        body: articleBody,
        description: articleBody,
      },
    };

    if (articleTags !== '') {
      const tags = articleTags.split(',');
      articleData.article.tagName = tags;
    }

    const { postAnArticle } = this.props;

    if (articlePhoto.data !== null) {
      this.handleImageUpload();
    } else {
      postAnArticle(articleData);
    }
  }

  handleChange = (event) => {
    const { target: { name, value, files } } = event;
    const { isFieldInvalid } = this.state;

    switch (name) {
      case 'articleTitle':
        isFieldInvalid.title = !TITLE_REGEX.test(value);
        break;
      case 'articleBody':
        isFieldInvalid.body = !BODY_REGEX.test(value);
        break;
      case 'articleTags':
        isFieldInvalid.tags = !TAGS_REGEX.test(value);
        break;
      case 'articlePhoto':
        this.setState({
          articlePhoto: {
            name: 'One Photo Added, click here again to change photo',
            data: files[0],
          },
        });
        break;
      default:
        break;
    }
    if (name !== 'articlePhoto') {
      this.setState({
        [name]: value,
      });
    }

    if ((isFieldInvalid.title === false
        && isFieldInvalid.body === false
    )) {
      this.setState({
        isFormValid: true,
      });
    } else {
      this.setState({
        isFormValid: false,
      });
    }
  }

  handleImageUpload = () => {
    const {
      articleTitle, articleBody, articleTags, articlePhoto,
    } = this.state;

    const { postAnArticle } = this.props;

    this.setState({
      displayProgress: 'block',
    });

    const imageUpLoad = storage.ref(`article-image/${articlePhoto.data.name}`).put(articlePhoto.data);
    imageUpLoad.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
          uploadProgress: progress,
        });
      },
      (error) => {
        this.setState({
          uploadError: error,
        });
      },
      /* istanbul ignore next */
      (complete) => {
        storage.ref('article-image').child(articlePhoto.data.name).getDownloadURL()
          .then(url => {
            const articleData = {
              article: {
                title: articleTitle,
                body: articleBody,
                description: articleBody,
                image: url,
              },
            };
            if (articleTags !== '') {
              const tags = articleTags.split(',');
              articleData.article.tagName = tags;
            }
            postAnArticle(articleData);
          });
      });
  }

  render() {
    const {
      isFieldInvalid, articlePhoto, articleTitle, articleBody, isFormValid,
      articleTags, uploadProgress, displayProgress, uploadError,
    } = this.state;
    const {
      errorOccured,
      isPosting,
      isArticlePosted,
      createdArticle,
    } = this.props;
    if (createdArticle !== undefined) {
      setTimeout(() => {
        window.location = `/article/${createdArticle.data.slug}`;
      },
      4000);
    }
    return (
      <div className="create-article">
        <h2 className="section-title">Create Article</h2>
        <Form onSubmit={this.handleCreateArticle}>
          <Form.Group controlId="formBasicTitle">
            <Form.Control
              type="text"
              required
              name="articleTitle"
              placeholder="Article Title"
              value={articleTitle}
              onChange={this.handleChange}
              isInvalid={isFieldInvalid.title} />
            {
            isFieldInvalid.title
              ? (
                <Form.Text className="text-muted" variant="danger">
                  Article title can&apos;t be empty or contain only digits or with less than 4 characters
                </Form.Text>
              )
              : (
                <Form.Text className="text-muted" />
              )
            }
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              name="articleBody"
              value={articleBody}
              onChange={this.handleChange}
              as="textarea"
              rows="15"
              placeholder="Article body"
              isInvalid={isFieldInvalid.body}
              required
            />
            {
            isFieldInvalid.body
              ? (
                <Form.Text className="text-muted">
                  Article body can&apos;t not be empty, should be atleast 100 characters long
                </Form.Text>
              )
              : (
                <Form.Text className="text-muted" />
              )
            }
          </Form.Group>
          <Form.Group controlId="formBasicTag">
            <Form.Control
              name="articleTags"
              value={articleTags}
              onChange={this.handleChange}
              type="text"
              placeholder="Article Tags"
              isInvalid={isFieldInvalid.tags} />
            {
            isFieldInvalid.tags
              ? (
                <Form.Text className="text-muted">
                  Enter tags should only be letters separated by comma like books,education
                </Form.Text>
              )
              : (
                <Form.Text className="text-muted" />
              )
            }
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="articlePhoto" style={{ cursor: 'pointer' }}>
              <h5 className="article-photo">
                <span>
                  <FontAwesomeIcon icon={faCamera} />
                  {' '}
                  Add Photo
                </span>
                <span className="article-photo-name">{articlePhoto.name}</span>
              </h5>
              <Form.Control
                    id="articlePhoto"
                    name="articlePhoto"
                    type="file"
                    accept=".png,.jpg"
                    onChange={this.handleChange}
                    style={{ display: 'none' }}
                />
            </Form.Label>
            <Row style={{ display: displayProgress }}>
              {
                uploadError === 'No Error'
                  ? (
                    <Col sm={12}>
                      <ProgressBar now={uploadProgress} label={`${uploadProgress}%`} animated />
                    </Col>
                  )
                  : (
                    <ErrorLabel
                      message={String(uploadError)}
                      tip="try uploading the image again"
                    />
                  )
              }

            </Row>
          </Form.Group>
          <Row className="status-section">
            <Col sm={12}>
              {
                errorOccured !== undefined
                && (
                <ErrorLabel
                message={String(errorOccured.errorMessage.errors.body)}
                tip="edit your article body"
                />
                )
              }
              {
                isArticlePosted && <SuccessLabel message="Article has been successfully created" />
              }
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="call-for-action">
              <Loader loaded={!isPosting} color="#00a4d3">
                <Button type="submit" disabled={!isFormValid} id="submitForm">
               Create Article
                </Button>
              </Loader>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

CreateArticle.protoTypes = {
  postAnArticle: PropTypes.func.isRequired,
  isArticlePosted: PropTypes.bool.isRequired,
};

export const mapStateToProps = state => ({
  isPosting: state.createArticle.isPosting,
  errorOccured: state.createArticle.error,
  isArticlePosted: state.createArticle.status,
  createdArticle: state.createArticle.item,
});

export default connect(mapStateToProps, { postAnArticle })(CreateArticle);
