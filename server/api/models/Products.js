/**
 * Products.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	
  attributes: {
    name : "string",
    discription : "string",
    price : "string",
    category : "json",
    quantity : "string",
    thum : "string",
    discount : "string"
  }
  
};

