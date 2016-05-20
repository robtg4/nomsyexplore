//post recipes page

var React = require('react-native');
var {StyleSheet, Text, View, Image, } = React;
//window
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerspace, this.border('red')]}></View>
        <View style={[styles.Header, this.border('blue')]}>
              <Text style={styles.signuptext}>Post A Recipe</Text>
        </View>
        <View style={styles.body}>
          <View>
          </View>

          <View>
          </View>

          <View>
          </View>

          <View>
          </View>
        </View>
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
  body: {
    marginTop: window.height/40,
    flex: 0.875,
    backgroundColor: 'white',
    borderRadius: 5,
    width: window.width/1.05,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    width: window.width,
    height: window.height/1.15,
    alignItems: 'center',
  },
  headerspace: {
    flex: 0.025,
    backgroundColor: 'white',
    width: window.width,
  },
  Header: {
    flex: 0.09,
    backgroundColor: 'white',
    width: window.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signuptext: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 15,
    color: 'black',
  },
});
