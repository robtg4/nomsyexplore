//main view to open up to tabs
'use strict';
var React = require('react-native');
var { StyleSheet,Text,View,ScrollView,} = React;
//libraries
var ScrollableTabView = require('react-native-scrollable-tab-view');
var MenuTabBar = require('../components/menuTabBar');
var NavigationBar = require('react-native-navbar');
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//dynamic component references + libraries
var Profile = require('../screens/profile');
var Recipes = require('../screens/recipes');
var Explore = require('../screens/explore');
var Post = require('../screens/post');
var Notifications = require('../screens/notifications');



module.exports = React.createClass({
  render: function() {
    var rightButtonConfig = {
      title: 'Next',
      handler: function onNext() {
        alert('hello!');
      }
    };

    var titleConfig = {
      title: 'Hello, world',
    };
    return (
      <View style={[styles.container, this.border('red')]}>
        <ScrollableTabView
        	initialPage={2}
        	tabBarUnderlineColor={'#4CB552'}
        	tabBarBackgroundColor={'white'}
          tabBarInactiveTextColor={'white'}
          tabBarActiveTextColor={'white'}
        	tabBarPosition={'bottom'}
        	renderTabBar={() => <MenuTabBar />}>
          <ScrollView
            key={1}
            tabLabel="map-o">
            <Explore navigator={this.props.navigator} />
          </ScrollView>
          <ScrollView
            key={2}
            tabLabel="map-marker" >
            <Recipes navigator={this.props.navigator} />
          </ScrollView>
          <ScrollView
            key={3}
            alwaysBounceVertical={false}
            tabLabel="plus-circle" >
            <Post navigator={this.props.navigator} />
          </ScrollView>
          <ScrollView
            key={4}
            tabLabel="user">
             <Profile navigator={this.props.navigator} />
          </ScrollView>
          <ScrollView
            key={5}
            tabLabel="bell-o">
            <Notifications navigator={this.props.navigator} />
          </ScrollView>
        </ScrollableTabView>
      </View>
    );
  },
  border: function(color) {
      return {
        //borderColor: color,
        //borderWidth: 1,
      }
  },
});

var styles = StyleSheet.create({
  header: {
  },
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: '#EFEFEF',
  },
});
