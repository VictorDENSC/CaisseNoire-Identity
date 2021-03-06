// @flow
import React from 'react';

import CommonSelect, { type CommonSelectProps } from './CommonSelect';

type SingleSelectProps = {
  value: ?Uuid,
  onChange: (?Uuid) => void,
  ...CommonSelectProps,
};

const SingleSelect = ({ onChange, ...otherProps }: SingleSelectProps) => {
  // $FlowFixMe: Should accept otherProps
  return <CommonSelect multiple={false} onChange={onChange} {...otherProps} />;
};

export default SingleSelect;
