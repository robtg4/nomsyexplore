//explore page

var React = require('react-native');
var {StyleSheet, Text, View, Image, ScrollView } = React;
//components
var ExploreCard = require('../components/explorecard');

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}>
          <View style={[styles.headerspace, this.border('red')]}></View>
          <ExploreCard
            onPress={() => {}}
            source={{uri: 'http://66.media.tumblr.com/889282658331317c9e999d7f94367b51/tumblr_nf71ie8pI71rzs2lno1_500.jpg'}}
            text={'Totoro'}
            rating={4}
            diets={['Nut Free', 'Vegan']}
            entryBrand={'Totoro'} />
          <ExploreCard
            onPress={() => {}}
            source={{uri: 'http://i.huffpost.com/gadgets/slideshows/404432/slide_404432_5032164_free.jpg'}}
            text={'Totoro'}
            rating={4}
            diets={['Nut Free', 'Vegan']}
            entryBrand={'Totoro'} />
          <ExploreCard
            onPress={() => {}}
            source={{uri: 'http://images.agoramedia.com/everydayhealth/gcms/instagram-slideshow-nomnompaleo-403.jpg'}}
            text={'Totoro'}
            rating={4}
            diets={['Nut Free', 'Vegan']}
            entryBrand={'Totoro'} />
          <ExploreCard
            onPress={() => {}}
            source={{uri: 'http://66.media.tumblr.com/889282658331317c9e999d7f94367b51/tumblr_nf71ie8pI71rzs2lno1_500.jpg'}}
            text={'Totoro'}
            rating={4}
            diets={['Nut Free', 'Vegan']}
            entryBrand={'Totoro'} />
        </ScrollView>
      </View>
    )
  },
  border: function(color) {
	    return {
	      //borderColor: color,
	      //borderWidth: 2,
	    }
	 },
});

var styles = StyleSheet.create({
  headerspace: {
    flex: 0.025,
    backgroundColor: 'white',
    width: window.width,
  },
  container: {
    flex: 1,
    width: window.width,
    height: window.height/1.15,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
