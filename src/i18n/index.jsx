import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as ReactIntl from 'react-intl';

import enLocaleData from 'react-intl/locale-data/en';
import enUSMessages from 'src/i18n/en-US';

ReactIntl.addLocaleData(enLocaleData);

export const FormattedTime = ReactIntl.FormattedTime;
export const FormattedDate = ReactIntl.FormattedDate;
export const FormattedPlural = ReactIntl.FormattedPlural;
export const FormattedMessage = ReactIntl.FormattedMessage;
export const FormattedNumber = ReactIntl.FormattedNumber;

export const FormattedDateTime = ({ value }) => (
  <span>
    <FormattedDate value={value} /> <FormattedTime value={value} />
  </span>
);

FormattedDateTime.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export const FormattedLength = connect(({ units }) => ({ units }))(
  ({ length, units }) => (
    <span>
      <FormattedNumber
        value={units === 'imperial' ? convertMmToIn(length) : length}
      />
      {' '}
      {units === 'metric' ? 'mm' : 'in'}
    </span>
  ),
);

export const FormattedVolume = connect(({ units }) => ({ units }))(
  ({ value, units }) => (
    <span>
      <FormattedNumber
        value={units === 'imperial' ? convertVolumeCmToIn(value) : value}
      />
      {' '}
      {units === 'metric' ? 'cm' : 'in'}
      <sup>3</sup>
    </span>
  ),
);

export const FormattedDuration = ({ value }) => (
  <span>
    <FormattedNumber value={value} /> <abbr title="Seconds">s</abbr>
  </span>
);

FormattedDuration.propTypes = {
  value: PropTypes.number.isRequired,
};

export const FormattedCost = ({ currency, value }) => (
  <FormattedNumber currency={currency} value={value} />
);

FormattedCost.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default {
  'en-US': {
    localeData: enLocaleData,
    messages: enUSMessages,
  },
};
