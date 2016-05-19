//step 3 of app when user presses next
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
      paleo: false,
      glutenfree: false,
      eggfree: false,
      nutfree: false,
      vegan: false,
      vegetarian: false,
      healthy: false,
      dairyfree: false
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
            <Text style={styles.stepsec2text}>Choose the lifestyle that best fits you so that our community knows what you like best!</Text>
          </View>
        </View>

        <View style={styles.modalInfo1}>
          <View style={styles.yourInfo}>
            <Text style={styles.bold}>DIETARY RESTRICTIONS</Text>
          </View>
          <View style={styles.dietrow}>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => { this.updateChoice('glutenfree') }}
              underlayColor={'transparent'}>
              <View style={styles.dietCol}>
                <Image
                  source={this.state.glutenfree ? require('../img/icons/glutenfree_selected.png') : require('../img/icons/glutenfree.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <Text style={[styles.dietTitle, this.state.glutenfree ? {color: '#4CB552'} : {color: '#EFEFEF'}]}>Gluten Free</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => { this.updateChoice('eggfree') }}
              underlayColor={'transparent'}>
              <View style={styles.dietCol}>
                <Image
                  source={this.state.eggfree ? require('../img/icons/eggfree_selected.png') : require('../img/icons/eggfree.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <Text style={[styles.dietTitle, this.state.eggfree ? {color: '#4CB552'} : {color: '#EFEFEF'}]}>Egg Free</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => { this.updateChoice('dairyfree') }}
              underlayColor={'transparent'}>
              <View style={styles.dietCol}>
                <Image
                  source={this.state.dairyfree ? require('../img/icons/dairyfree_selected.png') : require('../img/icons/dairyfree.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <Text style={[styles.dietTitle, this.state.dairyfree ? {color: '#4CB552'} : {color: '#EFEFEF'}]}>Dairy Free</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => { this.updateChoice('vegetarian') }}
              underlayColor={'transparent'}>
              <View style={styles.dietCol}>
                <Image
                  source={this.state.vegetarian ? require('../img/icons/vegetarian_selected.png') : require('../img/icons/vegetarian.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <Text style={[styles.dietTitle, this.state.vegetarian ? {color: '#4CB552'} : {color: '#EFEFEF'}]}>Vegetarian</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.dietrow}>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => { this.updateChoice('nutfree') }}
              underlayColor={'transparent'}>
              <View style={styles.dietCol}>
                <Image
                  source={this.state.nutfree ? require('../img/icons/nutfree_selected.png') : require('../img/icons/nutfree.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                  <Text style={[styles.dietTitle, this.state.nutfree ? {color: '#4CB552'} : {color: '#EFEFEF'}]}>Nut Free</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => { this.updateChoice('healthy') }}
              underlayColor={'transparent'}>
              <View style={styles.dietCol}>
                <Image
                  source={this.state.healthy ? require('../img/icons/healthy_selected.png') : require('../img/icons/healthy.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <Text style={[styles.dietTitle, this.state.healthy ? {color: '#4CB552'} : {color: '#EFEFEF'}]}>Healthy</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => { this.updateChoice('vegan') }}
              underlayColor={'transparent'}>
              <View style={styles.dietCol}>
                <Image
                  source={this.state.vegan ? require('../img/icons/vegan_selected.png') : require('../img/icons/vegan.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <Text style={[styles.dietTitle, this.state.vegan ? {color: '#4CB552'} : {color: '#EFEFEF'}]}>Vegan</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={{alignItems: 'center'}}
              onPress={() => { this.updateChoice('paleo') }}
              underlayColor={'transparent'}>
              <View style={styles.dietCol}>
                <Image
                  source={this.state.paleo ? require('../img/icons/paleo_selected.png') : require('../img/icons/paleo.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <Text style={[styles.dietTitle, this.state.paleo ? {color: '#4CB552'} : {color: '#EFEFEF'}]}>Paleo</Text>
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
              <Text style={styles.next}>Next</Text>
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
    this.props.navigator.push({name: 'step3'});
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
