// Generally good practice to label Higher Order Components files to start with 'With'

import React from 'react';

const withClass = props => (
  <div className={props.classes}>{props.children}</div>
);

export default withClass;
