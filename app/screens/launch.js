//launch page of app
var React = require('react-native');
var { View, Text, StyleSheet, Image, TextInput, TouchableHighlight, ScrollView} = React;
//window size
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//libraries
var Button  = require('react-native-button');
var Modal   = require('react-native-modalbox');
var Slider  = require('react-native-slider');


module.exports = React.createClass({
  getInitialState: function() {
		return {
      fullname: '',
			username: '',
			password: '',
      confirmpassword: '',
			errorMessage: '',
			loadingCurrentUser: true,
      email: '',
      swipeToClose: true,
      isOpen: false,
      isDisabled: false,
      sliderValue: 0.3,
		};
	},
  render: function() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bg}
          source={require('../img/bg/home-bg2.png')}>
            <View style={[styles.headerWrapper,this.border('red')]}>
              <Image
                style={styles.logo}
                source={require('../img/logos/home_logo.png')}
                resizeMode={'contain'} />
              <Text style={styles.slogan}>Find food that fits your lifestyle</Text>
            </View>
            <View style={[styles.btnCol, this.border('blue')]}>
              <TouchableHighlight
                onPress={this.openModal1}
        				underlayColor={'transparent'}>
                <Image
                  source={require('../img/buttons/signup.png')}
                  resizeMode={'contain'}
                  style={[styles.squarebtn, this.border('red')]} />
              </TouchableHighlight>
              <View style={styles.socialbtns} >
                  <View style={styles.options}>
                    <View style={styles.line}/>
                    <Text style={styles.or}>OR</Text>
                    <View style={styles.line}/>
                  </View>
                <TouchableHighlight
                  onPress={this.facebookSignUp}
                  underlayColor={'transparent'}>
                  <Image
                    source={require('../img/buttons/fb.png')}
                    resizeMode={'contain'}
                    style={[styles.squarebtn, this.border('red')]}/>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor={'transparent'}
                  onPress={this.googleSignUp} >
                  <Image
                    source={require('../img/buttons/google.png')}
                    resizeMode={'contain'}
                    style={[styles.squarebtn, this.border('red')]}/>
                </TouchableHighlight>
              </View>
            </View>
            <View style={[styles.footerWrapper,this.border('red')]}>
              <TouchableHighlight
                style={{alignItems: 'center'}}
                onPress={this.facebookSignUp}
                underlayColor={'transparent'}>
                  <Text style={styles.footerText}>Already have an account? Log in.</Text>
              </TouchableHighlight>
            </View>
        </Image>

        <Modal style={[styles.modal, styles.modal1]} ref={"modal1"} swipeToClose={this.state.swipeToClose} onClosed={this.onClose} onOpened={this.onOpen} onClosingState={this.onClosingState}>
          <View style={styles.headerspace}></View>
          <View style={styles.modalHeader}>
            <View style={styles.xrow}>
              <TouchableHighlight
                style={{alignItems: 'center'}}
                onPress={this.closeModal1}
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
              <Text style={styles.stepsec2text}>Join the Nomsy Explore community and change the way you find and discover recipes and restaurants!</Text>
            </View>
          </View>

          <View style={styles.modalInfo1}>
            <View style={styles.yourInfo}>
              <Text style={styles.bold}>YOUR INFORMATION</Text>
              <View style={{padding: 5}}></View>
            </View>
            <View style={styles.userInfo}>
              <View style={[styles.inputRow, this.border('blue')]}>
                <Image
                  source={require('../img/icons/name.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <TextInput
                  style={styles.signInput}
                  placeholder={'Full Name'}
                  onChangeText={(text) => this.setState({fullname: text})}
                  value={this.state.fullname}/>
              </View>
              <View style={[styles.inputRow, this.border('blue')]}>
                <Image
                  source={require('../img/icons/email.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <TextInput
                  style={styles.signInput}
                  placeholder={'Email'}
                  onChangeText={(text) => this.setState({email: text})}
                  value={this.state.email}/>
              </View>
            </View>
          </View>

          <View style={styles.modalInfo2}>
            <View style={styles.yourInfo}>
              <Text style={styles.bold}>LOGIN INFORMATION</Text>
            </View>
            <View style={styles.userInfo}>
              <View style={[styles.inputRow, this.border('blue')]}>
                <Image
                  source={require('../img/icons/user.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <TextInput
                  style={styles.signInput}
                  placeholder={'Username'}
                  onChangeText={(text) => this.setState({username: text})}
                  value={this.state.username}/>
              </View>
              <View style={[styles.inputRow, this.border('blue')]}>
                <Image
                  source={require('../img/icons/password.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <TextInput
                  style={styles.signInput}
                  placeholder={'Password'}
                  onChangeText={(text) => this.setState({password: text})}
                  value={this.state.password}/>
              </View>
              <View style={[styles.inputRow, this.border('blue')]}>
                <Image
                  source={require('../img/icons/password.png')}
                  resizeMode={'contain'}
                  style={[styles.icon, this.border('red')]}/>
                <TextInput
                  style={styles.signInput}
                  placeholder={'Confirm Password'}
                  onChangeText={(text) => this.setState({confirmpassword: text})}
                  value={this.state.confirmpassword}/>
              </View>
            </View>

            <View style={styles.modalSpace}>
            </View>
          </View>

          <View style={styles.modalFooter}>
            <Text style={styles.next}>Next</Text>
          </View>

       </Modal>
      </View>
    );
  },
  facebookSignUp: function() {

  },
  googleSignUp: function() {

  },
  onSignUpPress: function() {
    if (this.state.password === this.state.passwordConfirmation && this.state.username != null && this.state.email != null)
		{

		} else {

		}
  },
  onSignInPress: function() {

  },
  border: function(color) {
	    return {
	      //borderColor: color,
	      //borderWidth: 2,
	    }
	 },
   closeModal1: function(id) {
     this.refs.modal1.close();
   },
   openModal1: function(id) {
     this.refs.modal1.open();
   },
   toggleSwipeToClose: function() {
    this.setState({swipeToClose: !this.state.swipeToClose});
   },
});

var styles = StyleSheet.create({
  modalSpace: {
    flex: 2/7,
    width: window.width,
  },
  icon: {
    width: window.width/15,
    height: window.width/15,
    alignSelf: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signInput: {
    width: window.width/1.25,
    height: window.height/20,
    borderColor: '#F4F4F4',
    borderWidth: 1.2,
    borderRadius: window.height/80,
    margin: window.width/25,
    paddingLeft: 10,
    fontSize: 13,
    fontFamily: 'SourceSansPro-Regular',
  },
  next: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    color: 'white',
  },
  bold: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 13,
    color: 'black',
    marginTop: window.width/30,
    marginLeft: window.width/30,
  },
  userInfo: {
    flex: 0.66,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
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
  yourInfo: {
    flex: 0.20,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
  },
  stepsec1: {
    width: window.width,
    flex: 0.50,
  },
  stepsec2: {
    flex: 0.60,
    width: window.width,
    justifyContent: 'space-around',
    alignItems: 'center',
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
  headerspace: {
    flex: 0.5/7,
    backgroundColor: 'white',
    width: window.width,
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
  modalSteps: {
    flex: 1.6/7,
    backgroundColor: '#F4F4F4',
    width: window.width,
  },
  modalInfo1: {
    flex: 1.72/7,
    backgroundColor: 'white',
    width: window.width,
  },
  modalInfo2: {
    flex: 2.98/7,
    backgroundColor: 'white',
    width: window.width,
  },
  modalFooter: {
    flex: 0.7/7,
    backgroundColor: "#51AF58",
    width: window.width,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },
  text: {
    color: "black",
    fontSize: 22
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    color: 'white',
    fontSize: 12,
    justifyContent: 'flex-end',
    fontFamily: 'SourceSansPro-Bold',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    margin: 10,
  },
  or: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  line: {
    backgroundColor: 'white',
    width: window.width/6,
    height: 1,
  },
  socialbtns: {
    marginTop: 10,
    justifyContent: 'space-around',
  },
  slogan: {
    marginTop: -40,
    fontFamily:'Source Sans Pro',
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
    justifyContent:'space-around'
  },
  logo: {
    width: window.width/1.3,
    height: window.height/8,
  },
  footerWrapper: {
    flex: 0.05,
  },
  headerWrapper: {
		flex: 0.25,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent:'space-around',
		marginTop: window.height/35,
	},
  btnCol: {
    flex: 0.7,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
  },
  squarebtn: {
    width: window.width/1.4,
    height: window.height/14,
  },
  container: {
    flex: 1,
  },
  bg: {
		flex: 1,
		width: window.width,
		height: window.height,
	},
});
