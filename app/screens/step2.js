//step 2 of app when user presses next
var React = require('react-native');
var { View, Text, StyleSheet, Image, TextInput, TouchableHighlight, ScrollView} = React;
//window size
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//libraries


module.exports = React.createClass({
  getInitialState: function() {
		return {
		};
	},
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.headerspace}></View>
        <View style={styles.modalHeader}>
          <View style={styles.xrow}>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={this.restart}
              underlayColor={'transparent'}>
              <Image
                source={require('../img/buttons/delete-grey.png')}
                resizeMode={'contain'}
                style={[styles.delete, this.border('red')]}/>
            </TouchableHighlight>
            <View style={[styles.signup, this.border('blue')]}>
              <Text style={styles.signuptext}>Sign Up</Text>
            </View>
          </View>
        </View>

        <View style={styles.modalSteps}>
          <View style={styles.stepsec1}>
            <Image
              source={require('../img/buttons/step1.png')}
              resizeMode={'contain'}
              style={[styles.steps, this.border('red')]}/>
          </View>
          <View style={[styles.stepsec2, this.border('blue')]}>
            <Text style={styles.stepsec2text}><Text style={{fontFamily: 'SourceSansPro-Bold'}}>UserName</Text>, help others find you by adding a photo for your profile.</Text>
          </View>
        </View>

        <View style={[styles.modalInfo1, this.border('blue')]}>
          <TouchableHighlight
            style={{alignItems: 'center'}}
            onPress={this.choosePhoto}
            underlayColor={'transparent'}
            style={styles.photoSpace}>
            <Image
              source={require('../img/icons/userphoto.png')}
              resizeMode={'contain'}
              style={[styles.photo, this.border('red')]}/>
          </TouchableHighlight>
        </View>

        <View style={{flexDirection: 'row', flex: 0.7/7}}>
          <TouchableHighlight
            style={{alignItems: 'center'}}
            onPress={this.back}
            underlayColor={'transparent'}
            style={styles.modalFooterBack} >
              <Text style={styles.back}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{alignItems: 'center'}}
            onPress={this.next1}
            underlayColor={'transparent'}
            style={styles.modalFooterNext} >
              <Text style={styles.next}>Next</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  },
  choosePhoto: function() {

  },
  restart: function() {
    this.props.navigator.immediatelyResetRouteStack([{ name: 'launch'}])
  },
  back: function() {
    this.props.navigator.pop();
  },
  next2: function() {
  },
  border: function(color) {
	    return {
	      //borderColor: color,
	      //borderWidth: 2,
	    }
	 },
});

var styles = StyleSheet.create({
  photoSpace: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    marginBottom: window.width/3,
  },
  photo: {
    width: window.width/2,
    height: window.width/2,
  },
  back: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    color: '#51AF58',
  },
  next: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    color: 'white',
  },
  stepsec1: {
    width: window.width,
    flex: 0.50,
  },
  stepsec2: {
    flex: 0.60,
    width: window.width/1.05,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: window.width/33,
  },
  stepsec2text: {
    fontFamily: 'SourceSansPro-Regular',
  },
  steps: {
    marginTop: window.width/30,
    width: window.width/1.05,
    height: window.width/6,
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  signup: {
    flex: 0.80,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: window.width/30,
    marginRight: window.width/15,
  },
  signuptext: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    color: 'black',
  },
  delete: {
    width: window.width/14,
    height: window.width/14,
  },
  xrow: {
    flexDirection: 'row',
    marginLeft: window.width/30,
    marginRight: window.width/30,
    flex: 0.1,
  },
  modalHeader: {
    flex: 0.5/7,
    backgroundColor: 'white',
    width: window.width,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerspace: {
    flex: 0.5/7,
    backgroundColor: 'white',
    width: window.width,
  },
  container: {
    flex: 1,
  },
  bg: {
		flex: 1,
		width: window.width,
		height: window.height,
	},
  modalSteps: {
    flex: 1.6/7,
    backgroundColor: '#F4F4F4',
    width: window.width,
  },
  footerWrapper: {
    flex: 0.05,
  },
  modalInfo1: {
    flex: 4.7/7,
    backgroundColor: '#F4F4F4',
    width: window.width,
  },
  modalFooterBack: {
    flex: 0.5,
    backgroundColor: 'white',
    width: window.width/2,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: "#51AF58",
    borderWidth: 1,
  },
  modalFooterNext: {
    flex: 0.5,
    backgroundColor: "#51AF58",
    width: window.width/2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
