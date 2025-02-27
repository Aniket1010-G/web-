let a = fetch(" https://alexwohlbruck.github.io/cat-facts/")
a.then((value1)=>{
    return value.json();
}).then((value2)=>{
    console.log(value2);
})