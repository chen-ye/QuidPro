
Parse.initialize("OJwQbLREQ9YMD77jRbG5PhHylsCb65Bt9KJLpvOO", "MxXlIbBVhtiSSaRNJOpCm02V4gxIiLOZ5zqrIb7w");
    
    var DealsObject = Parse.Object.extend("Deals");
    var dealsObject = new DealsObject();
      
      dealsObject.set("foursquare_id", "474d8bbdf964a520a54c1fe3");
      dealsObject.set("deal_name","Rooftop Expansion");
      dealsObject.set("deal_cta","help us fund");
      dealsObject.set("deal_emoji","🌇");
      dealsObject.set("perk_cta","in exchange for");
      dealsObject.set("perk_name","Discount Drinks");
      dealsObject.set("perk_emoji","🍹");
      dealsObject.set("funding_target",300); //in $$
      dealsObject.set("funding_increment",10);
      dealsObject.set("current_funding",100);
      
      
      dealsObject.save(null, {
      success: function(object) {
        $(".success").show();
          alert('New object created with objectId: ' + dealsObject.id);
      },
      error: function(model, error) {
        $(".error").show();
          alert('Failed to create new object, with error code: ' + error.message);
      }
    });