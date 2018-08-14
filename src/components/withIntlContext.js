import React from 'react';
import { IntlConsumer } from './consumer';

export default function withIntlContext(Component) {
  function WithIntlContext(props) {
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
  
  WithIntlContext.displayName = `withIntlContext(${Component.displayName || Component.name})`;
  return WithIntlContext;
}
