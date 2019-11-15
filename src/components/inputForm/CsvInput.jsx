import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { 
  Button, 
  ButtonToolbar, 
  ControlLabel, 
  FormControl, 
  FormGroup, 
  Label 
} from 'react-bootstrap';

import ReactFileReader from 'react-file-reader';

import SaveButtonTitle from './SaveButtonTitle';

const CsvInput = ({ handleFileChange, name }) => (
  <FormGroup>
    <FormattedMessage
      id="chooseCsvFile"
      defaultMessage="Choose CSV File: "
    />
    <ReactFileReader handleFiles={handleFileChange} fileTypes={'.csv'}>
      <button className='btn'>Upload</button>
    </ReactFileReader>
  </FormGroup>
);

CsvInput.defaultProps = { name: '' };

CsvInput.propTypes = {
  handleFileChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default CsvInput;
