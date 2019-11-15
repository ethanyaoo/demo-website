import React from 'react';
import PropTypes from 'prop-types';

import Fa from 'react-fontawesome';
import { FormattedMessage } from 'react-intl';

import {
  Button,
  ButtonToolbar,
  ControlLabel,
  FormControl,
  FormGroup,
  MenuItem,
  SplitButton
} from 'react-bootstrap';

import ReactFileReader from 'react-file-reader';

import Loading from 'src/components/inputForm/Loading';
import SaveButtonTitle from 'src/components/inputForm/SaveButtonTitle';
import CsvInput from './CsvInput';

const styles = {
  spacingTop: { marginTop: '1rem' },
};

const FileForm = ({
  handleSubmit,
  handleInputChange,
  handleFileChange,
  handleDescriptionChange,
  handleDelete,
  loading,
  name,
  uuid,
  description,
}) => (
  <div>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="uxName">
          <FormattedMessage id="formName" defaultMessage="Name" />
          <FormControl
            name="name"
            onChange={handleInputChange}
            required
            type="text"
            value={name}
          />
        </FormGroup>

	<FormGroup controlId="uxDescription">
	  <FormattedMessage id="formDescription" defaultMessage="Description" />
	  <FormControl
	    name="description"
	    onChange={handleDescriptionChange}
	    required
	    type="text"
	    value={description}
	  />
	</FormGroup>

        <FormGroup>
          <FormattedMessage
            id="chooseCsvFile"
            defaultMessage="Choose CSV File: "
          />
          <ReactFileReader handleFiles={handleFileChange} fileTypes={'.csv'}>
            <button className='btn'>Upload</button>
          </ReactFileReader>
        </FormGroup>

        <div className="clearfix">
          <ButtonToolbar className="pull-right">
            <Button
              type={<SaveButtonTitle />}
              bsstyle="success"
              onClick={() => window.open("/pageTwo.html", "_self")}
            >
              Next
            </Button>
          </ButtonToolbar>
        </div>

      </form>
  </div>
);

FileForm.defaultProps = {
  uuid: null,
};

FileForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  uuid: PropTypes.string,
};

export default FileForm;

