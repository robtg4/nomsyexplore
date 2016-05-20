//profile page

var React = require('react-native');
var {StyleSheet, Text, View, Image,ScrollView } = React;
//window
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerspace, this.border('red')]}></View>
        <View style={[styles.Header, this.border('blue')]}>
              <Text style={styles.signuptext}>Username</Text>
        </View>
        <ScrollView style={styles.body}>
          <View>
            <Image
              source={require('../img/bg/user_bg.png')}
              style={[styles.userwallpaper, this.border('red')]}>
                <View style={[{flex: 0.5, justifyContent: 'center'}, this.border('blue')]}>
                  <Image
                    source={require('../img/bg/profile.png')}
                    style={styles.userphoto} />
                </View>
                <Text style={[styles.usertext, this.border('red')]}>Username</Text>
                <View style={{flex: 0.10}}/>
                <View style={styles.followinfo}>
                  <Text style={[styles.followtext, this.border('red'), {marginLeft: window.width/20}]}>112 Followers</Text>
                  <View style={[styles.line, , {marginTop: window.width/50}]}></View>
                  <Text style={[styles.followtext, this.border('red'), {marginRight: window.width/20}]}>19 Following</Text>
                </View>
            </Image>
          </View>

          <View style={styles.saved}>
          </View>

          <View>
          </View>

          <View>
          </View>
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
  line: {
    height: window.width/12,
    width: 1,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  followtext: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 15,
    backgroundColor: 'transparent',
    color: 'white',
    justifyContent: 'center',
    alignSelf:'center',
  },
  followinfo: {
    backgroundColor:'black',
    width: window.width,
    flex: 0.25,
    opacity: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  usertext: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 20,
    flex: 0.15,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  userphoto: {
    width: window.width/5,
    height: window.width/5,
    borderRadius: window.width/5/2,
    alignSelf: 'center',
  },
  userwallpaper: {
    width: window.width,
    height: window.height/3.5,
  },
  saved: {
    flex: 0.60,
  },
  body: {
    flex: 0.875,
    backgroundColor: 'white',
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
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  signuptext: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    color: 'black',
  },
});
