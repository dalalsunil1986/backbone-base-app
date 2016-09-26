/**
 * DummyId object
 * 
 * Returns an initial id for logged-in users
 * 
 */
define([],function() {

    var dummyIdentity = 'gfuhsgdfhsdghsgsdgf6754236542';  //initial id for authenticated users
    
    return {
        dummyIdentity:function () {
            return dummyIdentity;
        }
    };

    
});
