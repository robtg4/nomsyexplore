//explore page

var React = require('react-native');
var {StyleSheet, Text, View, Image, } = React;
//components
var ExploreCard = require('../components/explorecard');

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>

        <ExploreCard
          onPress={() => {}}
          source={{uri: 'http://66.media.tumblr.com/889282658331317c9e999d7f94367b51/tumblr_nf71ie8pI71rzs2lno1_500.jpg'}}
          text={'Totoro'}
          rating={4}
          entryBrand={'Totoro'} />

      </View>
    )
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width: window.width,
    height: window.height/1.15,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
