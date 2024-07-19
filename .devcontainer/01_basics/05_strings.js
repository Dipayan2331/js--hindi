const name = "dipa"
const repocount = 50
console.log(name + repocount + "value");
console.log(`hello my name is ${name} and my repocount${repocount}`);
const gameName = new String ('dip-yn')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("p"));
const newString = gameName.substring(0, 3)
console.log(newString);
const anotherString  =  gameName.slice(-2, 0)
console.log(anotherString);
const newStringOne = "      Dipayn   "
console.log(newStringOne.trim());
console.log(newStringOne);
const url = "http://ccppt.com/cpp%20pm"
console.log( url.replace("%20" , "-"))
console.log(url.includes("sundar"))
console.log(gameName.split("-"));
