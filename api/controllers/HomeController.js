/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 //var Index_Fn  =  require('HomeController.js');   
//console.log(require('path').resolve(__dirname,'../../assets/js/index_package/'))

module.exports = {
	index: function(req,res) {
        		res.view();
 	 },
};

