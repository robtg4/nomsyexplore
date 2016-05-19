//step 4 of app when user presses next
var React = require('react-native');
var { View, Text, StyleSheet, Image, TextInput, TouchableHighlight, ScrollView} = React;
//window size
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//libraries
var DietData = require('../stores/diets');

module.exports = React.createClass({
  getInitialState: function() {
		return {
      sweet: false,
      spicy: false,
      salty: false,
      sour: false,
      fruity: false,
      bitter: false,
		};
	},
  render: function() {
    var dietArray = this.state.diets;
    var dietChoices = DietData.Diets;
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
            <Text style={styles.stepsec2text}><Text style={{fontFamily: 'SourceSansPro-Bold'}}>UserName</Text>, help us recommend something delicious by telling us more about your diet.</Text>
          </View>
        </View>

        <View style={styles.modalInfo1}>
          <View style={styles.yourInfo}>
            <Text style={styles.bold}>TASTE</Text>
          </View>
          <View style={styles.dietrow}>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => { this.updateChoice('sweet') }}
              underlayColor={'transparent'}>
              <View style={styles.dietCol}>
                <Image
                  source={this.state.sweet ? require('../img/taste/spoon_of_sugar_selected.png') : require('../img/taste/spoon_of_sugar.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <Text style={[styles.dietTitle, this.state.sweet ? {color: '#4CB552'} : {color: '#EFEFEF'}]}>Gluten Free</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => { this.updateChoice('spicy') }}
              underlayColor={'transparent'}>
              <View style={styles.dietCol}>
                <Image
                  source={this.state.spicy ? require('../img/taste/chili_pepper_selected.png') : require('../img/taste/chili_pepper.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <Text style={[styles.dietTitle, this.state.spicy ? {color: '#4CB552'} : {color: '#EFEFEF'}]}>Egg Free</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => { this.updateChoice('salty') }}
              underlayColor={'transparent'}>
              <View style={styles.dietCol}>
                <Image
                  source={this.state.salty ? require('../img/taste/salt_shaker_selected.png') : require('../img/taste/salt_shaker.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <Text style={[styles.dietTitle, this.state.salty ? {color: '#4CB552'} : {color: '#EFEFEF'}]}>Dairy Free</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.dietrow}>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => { this.updateChoice('sour') }}
              underlayColor={'transparent'}>
              <View style={styles.dietCol}>
                <Image
                  source={this.state.sour ? require('../img/taste/citrus_selected.png') : require('../img/taste/citrus.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <Text style={[styles.dietTitle, this.state.sour ? {color: '#4CB552'} : {color: '#EFEFEF'}]}>Vegetarian</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => { this.updateChoice('bitter') }}
              underlayColor={'transparent'}>
              <View style={styles.dietCol}>
                <Image
                  source={this.state.bitter ? require('../img/taste/java_coffee_bean_selected.png') : require('../img/taste/java_coffee_bean.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                  <Text style={[styles.dietTitle, this.state.bitter ? {color: '#4CB552'} : {color: '#EFEFEF'}]}>Nut Free</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => { this.updateChoice('fruity') }}
              underlayColor={'transparent'}>
              <View style={styles.dietCol}>
                <Image
                  source={this.state.fruity ? require('../img/taste/raspberry_selected.png') : require('../img/taste/raspberry.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <Text style={[styles.dietTitle, this.state.fruity ? {color: '#4CB552'} : {color: '#EFEFEF'}]}>Healthy</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.modalSpace}>
          </View>
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
              <Text style={styles.next}>Let{"'"}s Eat</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  },
  updateChoice: function(type) {
    let newState = {...this.state};
    newState[type] = !newState[type];
    this.setState(newState);
  },
  next1: function() {
    this.props.navigator.immediatelyResetRouteStack([{ name: 'main'}])
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
  dietCol: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  dietTitle: {
    fontFamily: 'SourceSansPro-Semibold',
    fontSize: 14,
  },
  icon: {
    width: window.width/7,
    height: window.width/7,
    alignSelf: 'center',
  },
  bold: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 13,
    color: 'black',
    marginTop: window.width/30,
    marginLeft: window.width/30,
  },
  yourInfo: {
    flex: 0.20,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
  },
  modalSpace: {
    flex: 2/7,
    width: window.width,
  },
  dietrow: {
    flex: 0.66,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    width: window.width/1.01,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: window.width/70,
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
