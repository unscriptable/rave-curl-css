/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var css = require('curl/plugin/css');
var raveAmdPlugins = require('rave-amd-plugins');

exports.create = create;

function create (context) {
	if (!context.amdPluginMap) context.amdPluginMap = {};
	context.amdPluginMap.css = 'curl/plugin/css';


	var base = raveAmdPlugins.create(context);
	var baseFilter = base.pluginFilter;
	base.pluginFilter = function (load) {
		return baseFilter.apply(this, arguments) === 'css';
	};
	return base;
}
