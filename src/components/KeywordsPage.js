import React, { Component } from 'react';
import style from './Menu.css';

import KeywordForm from 'components/keywords/KeywordForm.jsx';

export default class KeywordsPage extends Component {
  

  render() {
    const selectedTags = tags => {console.log(tags)};
    return (<>
      <div>
	<KeywordForm />
      </div>
    </>);
  }
}
