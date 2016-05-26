//card used for explore preview of locations
'use strict'
var React = require('react-native');
var {View, StyleSheet, Image, TouchableHighlight, Text} = React;
//window
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//libraries

module.exports = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
          style={styles.touchCard}
          underlayColor={'transparent'}
          onPress={this.props.onPress} >
            <View style={styles.card}>
              <Image
                source={this.props.source}
                style={[styles.articlePreview, this.border('red')]} >
              </Image>
              <View style={[styles.container, this.border('green')]}>
                  <View style={[styles.header, this.border('blue')]}>
                      <View>
                        <Text style={[styles.previewText]}>{this.props.text}</Text>
                      </View>
                      <View style={styles.ratingrow}>
                        <Text style={styles.ratingtext}>{this.props.rating.toFixed(1)}</Text>
                      </View>
                  </View>
                  <View style={[styles.footer, this.border('white')]}>
                    <View style={styles.sourceRow}>
                      <View style={[this.border('white')]}>
                          <Text style={[styles.rowText, {fontWeight: 'bold'}]}>{this.props.entryBrand}</Text>
                      </View>
                    </View>
                  </View>
              </View>
            </View>
        </TouchableHighlight>
    )
  },
  onStarRatingPress: {

  },
  border: function(color) {
	    return {
	      borderColor: color,
	      borderWidth: 2,
	    }
	 },
});

var styles = StyleSheet.create({
  ratingtext: {
    color: 'grey',
    fontSize: 15,
    fontFamily: 'SourceSansPro-Regular',
    backgroundColor: 'transparent',
  },
  ratingrow: {
    flexDirection: 'row',
  },
  starrow: {
    flexDirection: 'row'
  },
  sourceRow: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  rowText: {
    textAlign: 'left',
    color: 'black',
    fontSize: 15,
    marginLeft: 5,
    fontFamily: 'SourceSansPro-Regular',
  },
  touchCard: {
    width: window.width,
    /*shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,*/
    alignSelf:'center',
  },
  card: {
    flex: 1,
    width: window.width,
    alignSelf:'center'
  },
  header: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: window.height/80,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  articlePreview: {
    flex: 2,
    height: window.width*0.90,
    width:window.width,
    flexDirection: 'column',
    alignSelf:'center',
  },
  previewText: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
    marginLeft: 5,
    backgroundColor: 'transparent',
  },

});
