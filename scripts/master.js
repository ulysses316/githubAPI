const searchProfile = ()=>{
    let data = []
    username = document.querySelector("#usernameID").value;
    let url = "https://api.github.com/users/" + username;  
    fetch(url)
        .then((response => response.json()))
        .then((myJson) =>{
            let element = document.querySelector("#info-table");
            element.style.display = "inline-table";
            document.querySelector(".circle-img").src = myJson.avatar_url;
            document.querySelector("#follower").innerHTML = "Followers: " + myJson.followers
            document.querySelector("#following").innerHTML = "Following: " + myJson.following
            data.push(myJson.bio)
            data.push(myJson.login)
            data.push(myJson.location)
            data.push(myJson.email)
            data.push(myJson.twitter_username)
            for(value in data){
                document.querySelector("#dato" + value).innerHTML = data[value];
            }
        })
}