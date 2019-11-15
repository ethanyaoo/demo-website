import React from 'react';
import PropTypes from 'prop-types';

import Fa from 'react-fontawesome';
import { FormattedMessage } from 'react-intl';

import {
  Button,
  ButtonToolbar,
} from 'react-bootstrap';

import SaveButtonTitle from 'src/components/inputForm/SaveButtonTitle';

const styles = {
  spacingTop: { marginTop: '1rem' },
};

const DataTable = props => {
    return (
      <div>
        <ButtonToolbar className="pull-right">
          <Button
            type={<SaveButtonTitle />}
            bsstyle="success"
            onClick={() => window.open("/pageTwo.html", "_self")}
          >
            Back
          </Button>
        </ButtonToolbar>
      </div>
    );
};

export default DataTable;
