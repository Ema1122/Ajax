
var playerContainer = document.getElementById("player-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
	
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'http://data.nba.net/10s/prod/v1/2019/players.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
	  console.log(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }

  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  //pageCounter++;
  //if (pageCounter > 3) {
  btn.classList.add("hide-me");
  //}
});

function renderHTML(data) {
  var htmlString = "";
	
  for (i = 0; i < 50; i++) {
    htmlString += "<p>" + data.league.sacramento[i].firstName+" "+data.league.sacramento[i].lastName+" numero maglia:"+data.league.sacramento[i].jersey ;
	
    htmlString += '</p>';

  }
  console.log(htmlString);

  playerContainer.insertAdjacentHTML('beforeend', htmlString);
}

