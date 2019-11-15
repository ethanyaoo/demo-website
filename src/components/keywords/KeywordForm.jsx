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


class KeywordForm extends React.Component {
  constructor() {
    super();

    var data = JSON.parse(localStorage.getItem("tagsCreated"));
    var tagsMade = [];
    
    localStorage.clear();

    if (data) {
      for (var i = 0; i < data.length; i++) {
        tagsMade.push(data[i]);
      }    
    }

    this.state = {
      tags: tagsMade
    };

    this.removeTag = this.removeTag.bind(this);
    this.inputKeyDown = this.inputKeyDown.bind(this);
  }

  removeTag(i) {
    const newTags = [ ...this.state.tags ];
    newTags.splice(i, 1);
    this.setState({ tags: newTags });

    localStorage.clear();
    localStorage.setItem("tagsCreated", JSON.stringify(this.state.tags));
  }

  inputKeyDown(e) {
    const val = e.target.value;
    if (e.key === 'Enter' && val) {
      if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      this.setState({ tags: [...this.state.tags, val]});
      this.tagInput.value = null;

      console.log(this.state.tags);

      localStorage.clear();
      localStorage.setItem("tagsCreated", JSON.stringify(this.state.tags));
            
    } else if (e.key === 'Backspace' && !val) {
      this.removeTag(this.state.tags.length - 1);
    }

  }

  render() {
    const { tags } = this.state;

    return (
      <div className="input-tag">
        <ul className="input-tag__tags">
          { tags.map((tag, i) => (
            <li key={tag}>
              {tag}
              <button type="button" onClick={() => { this.removeTag(i); }}>
                X
              </button>
            </li>
          ))}
          <li className="input-tag__tags__input">
            <input 
              type="text" 
              onKeyDown={this.inputKeyDown} 
              ref={c => { this.tagInput = c; }} 
            />
          </li>
        </ul>
        <ButtonToolbar className="pull-right">
          <Button
            type={<SaveButtonTitle />}
            bsstyle="success"
            onClick={() => window.open("/index.html", "_self")}
          >
            Back
          </Button>
          <Button
            type={<SaveButtonTitle />}
            bsstyle="success"
            onClick={() => window.open("/pageThree.html", "_self")}
          >
            Next
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default KeywordForm;




