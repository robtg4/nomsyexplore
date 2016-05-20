'use strict'

var React = require('react-native');
var {View, Image} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <View>
        <Image
          resizeMode={'contain'}
          style={[this.sizing(this.props.size), this.props.style]}
          souce={{uri: this.props.name}} />
      </View>
    )
  },
  sizing: function(size) {
    return {
      width: size,
      height: size,
    }
  },
});
