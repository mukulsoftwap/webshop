/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getCategoryById : function(req,res){
        var id =req.params.id;
        //console.log(id);
        Category.find({ where: { 'name':id },select: ['subCat']}).exec(function(err, record){
            if(err) return err;
            res.ok(record);
        })
    }
};

