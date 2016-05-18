//main page that combines android and ios code
//and auto-routes to login page (or home screen if already
//logged in)
'use strict';
var React = require('react-native');
var {AppRegistry, Component,StyleSheet,Text,View,Navigator } = React;
var Launch = require('./screens/launch');
var Step2 = require('./screens/step2');
var ROUTES = {
	launch: Launch,
	step2: Step2,
}

module.exports = React.createClass({
	componentWillMount: function() {

	},
	renderScene: function(route, navigator) {
		//when navigator is initially shown it has to render initial route
		//render a component and return it, whatever we return is placed on stack
		//add navigator property into this component for all app access
		var Component = ROUTES[route.name]; //ROUTE['signin'] => Signin
		return <Component route={route} navigator={navigator} {...route.passProps}/>;
	},
	transition: function(route) {
    	return ROUTES[route.name].transition;
  },
	render: function() {
		return (
			<Navigator
				style={styles.container}
				initialRoute={{name: 'launch'}}
				renderScene={this.renderScene}
				configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; }} />
		);
	}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
