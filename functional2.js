var obj ={
    name:"golf",
    say: function(lastname){
     return 'hi '+ this.name +lastname
    }
}
let info = obj.say('xxx')
console.log(info)
console.log(obj.name)
console.log(obj.say('yyy'))