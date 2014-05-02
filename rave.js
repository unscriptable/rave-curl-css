/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var css = require('curl/plugin/css');

exports.create = create;

function create (context) {
	var info = {
		name: 'curl/plugin/css',
		module: css
	};
	if (!context.amdPluginMap) context.amdPluginMap = {};
	context.amdPluginMap['css']
		= context.amdPluginMap['curl/plugin/css']
		= info;
}
