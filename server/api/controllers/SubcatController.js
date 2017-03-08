/**
 * SubcatController
 *
 * @description :: Server-side logic for managing subcats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getSubCategoryById : function(req,res){
        var id =req.params.id;
        //console.log(id);
        Subcat.find({ where: { 'id':id },select: ['name']}).populate('parent').exec(function(err, record){
            if(err) return err;
            res.ok(record);
        })
    }
};

