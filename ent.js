let myObj= {
    name : "riya",
    email : "riyasharma@gmail.com",
    

};

let myObj_serialized=JSON.stringify(myObj);

localStorage.setItem("myObj", myObj_serialized);

let myObj_deserialized = JSON.parse(localStorage.getItem("myobj"));

console.log(myObj_deserialized);
