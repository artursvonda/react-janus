'use strict';

var React = require('react/addons');
var PureRenderMixin = React.addons.PureRenderMixin;
var SvgIcon = require('material-ui/lib/svg-icon');

var PlacesGolfCourse = React.createClass({
  displayName: 'PlacesGolfCourse',

  mixins: [PureRenderMixin],

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('circle', { cx: '19.5', cy: '19.5', r: '1.5' }),
      React.createElement('path', { d: 'M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z' })
    );
  }

});

module.exports = PlacesGolfCourse;