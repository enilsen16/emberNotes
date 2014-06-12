import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return data.result;
  }
});

var data = {
  "status": "ok",
"result": [
    {
      noteBody: "Twilight Sparkle",
      picture: "http://img4.wikia.nocookie.net/__cb20140420032412/mlp/images/thumb/e/e0/Twilight_Sparkle_after_drying_herself_S1E03.png/209px-Twilight_Sparkle_after_drying_herself_S1E03.png"
    },
    {
      noteBody: "Applejack",
      picture: "http://img3.wikia.nocookie.net/__cb20121029101939/mlp/images/thumb/e/ee/Applejack_proud_of_herself_S1E01.png/209px-Applejack_proud_of_herself_S1E01.png"
    },
  ]
};
