/**
 * ProductsController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getProductById : function(req,res){
        var id =req.params.id;
        Products.findOne(id).exec(function(err, record){
            if(err) return err;
            res.ok(record);
        })
    }
};

