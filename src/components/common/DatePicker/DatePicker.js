// @flow
import React from 'react'
import { DatePicker } from 'antd'
import moment, { type Moment } from 'moment'

import FormItem from '../FormItem/FormItem'

import STYLES from './styles.less'

type DatePickerProps = {
  label: string,
  value: ?Moment,
  onChange: (?Moment) => void,
  disableDates?: any => boolean,
  disabled?: boolean,
  testId?: string
}

const CustomDatePicker = (props: DatePickerProps) => {
  return (
    <FormItem disabled={props.disabled} label={props.label}>
      <div test-id={props.testId}>
        <DatePicker
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
          disabledDate={props.disableDates}
          className={STYLES.datePicker}
          showToday={false}
          format={'dddd D MMMM'}
        />
      </div>
    </FormItem>
  )
}

export default CustomDatePicker