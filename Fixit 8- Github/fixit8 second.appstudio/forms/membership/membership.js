
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

Button1.onclick=function() {
  let memberName = Input1.value
   if (memberName == members)
    alert("You have account ")
  else {
    members.push(Input1.value)
    alert("members have been registered")
    }
}
    


