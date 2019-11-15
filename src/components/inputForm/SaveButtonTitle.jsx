import React from 'react';
import PropTypes from 'prop-types';
import Fa from 'react-fontawesome';
import { FormattedMessage } from 'react-intl';

const SaveButtonTitle = ({ resourceName }) => (
  <span>
    <FormattedMessage id="button.next" defaultMessage="Next" />
    {' '}
    {resourceName}
  </span>
);

SaveButtonTitle.defaultProps = { resourceName: null };
SaveButtonTitle.propTypes = { resourceName: PropTypes.string };

export default SaveButtonTitle;
