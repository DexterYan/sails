/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 //var Index_Fn  =  require('HomeController.js');   
//console.log(require('path').resolve(__dirname,'../../assets/js/index_package/'))
var Backbone = require('backbone');
var index_fn = require('../../assets/js/index_package/call.fn');
var index_view = require('../../assets/js/index_package/index_view');

module.exports = {
	index: function(req,res) {
        		new index_fn("index");
 	 },
};

