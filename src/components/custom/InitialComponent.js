'use strict';

import React from 'react';

require('styles/custom/Initial.less');

class InitialComponent extends React.Component {
  render() {
    return (
      <div className="initial-component">
        Please edit src/components/custom//InitialComponent.js to update this component!
      </div>
    );
  }
}

InitialComponent.displayName = 'CustomInitialComponent';

// Uncomment properties you need
// InitialComponent.propTypes = {};
// InitialComponent.defaultProps = {};

export default InitialComponent;
