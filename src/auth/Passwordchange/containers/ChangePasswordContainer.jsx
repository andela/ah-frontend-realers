import { connect } from 'react-redux';
import changePasswordAction from '../redux/actions/postAction';

const mapStateToProps = state => ({
  request_success: state.changePassword.success,
  request_errors: state.changePassword.errors,
  isLoading: state.changePassword.isLoading,
});

export default connect(mapStateToProps, { changePasswordAction });
