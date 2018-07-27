import React from 'react';
import { IntlConsumer } from './consumer';

export default function withIntlContext(Component) {
  return function (props) {
    return (
      <IntlConsumer>
        {(intl) => (
          <Component
            {...props}
            intl={intl}
          />
        )}
      </IntlConsumer>
    )
  }
}
