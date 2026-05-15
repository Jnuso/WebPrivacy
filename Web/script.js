fetch("https://api.ipify.org?format=json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.getElementById("ip-display").textContent = data.ip;
    })
    .catch(function(error) {
        document.getElementById("ip-display").textContent = "Could not load IP address.";
        console.log("Error:", error);
    });