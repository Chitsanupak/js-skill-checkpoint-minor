// Question #2: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(changeArray){
        return changeArray.json()
    })
    .then(function(uaers){
        let  newUsers = uaers.map(function(user){
            return user.name
        })

        let nameLong = newUsers.filter(function(name){
            return name.length > 17
        })
        console.log(nameLong)
})
