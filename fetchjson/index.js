"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://pokeapi.co/api/v2/pokemon/ditto";
axios_1["default"].get(url).then(function (response) {
    var res = response.data.abilities;
    var name = res.ability.name;
    var url = res.ability.url;
    var slot = res.slot;
    var hidden = res.is_hidden;
    console.log(res);
    //   console.log(
    //     `The ability ${name} at slot ${slot} is ${hidden} and can be found at ${url}.`
    //   );
});
