// Code your solution in this file!
function logDriverNames(array){
  return array.forEach((driver) =>{
    console.log(driver.name)
  })
}

function logDriversByHometown(array, hometown){
  return array.forEach(driver => {
    if(driver.hometown === hometown)
      console.log(driver.name)
  }) 
}

function driversByRevenue(){
  
}

function driversByName(){
  
}

function totalRevenue(){
  
}