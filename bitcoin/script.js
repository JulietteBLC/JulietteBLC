  var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("demo").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main", true);
xmlhttp.send();

function homePageLoading() {
    url = 'apiUrl';
    elementID = 'idDeVotreElementHtml';
    fonctionRequeteApi(url, elementID);

    ...
}

  {
      "version": 130000,
    "protocolversion": 70014,
    "blocks": 447078,
    "timeoffset": 0,
    "connections": 86,
    "proxy": "",
    "difficulty": 317688400354.0338,
    "testnet": false,
    "paytxfee": 0,
    "relayfee": 0.00001,
    "errors": ""
}
