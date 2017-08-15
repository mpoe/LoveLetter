/**
 * Created by Mpoe on 15-08-2017.
 */
var Cards = {
    ajcardlist: "",
    createPack: function(){
        $.getJSON("../json/cards.json", function(data){
            Cards.ajcardlist = data;
        })
    }
}