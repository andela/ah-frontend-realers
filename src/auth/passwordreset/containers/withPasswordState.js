import { connect } from 'react-redux';
import resetPasswordAction from '../redux/actions/postAction';

const mapStateToProps = state => ({
  request_success: state.resetPassword.success,
  request_errors: state.resetPassword.errors,
  isLoading: state.resetPassword.isLoading,
});

export default connect(mapStateToProps, { resetPasswordAction });
