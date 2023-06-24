// A mock function to mimic making an async request for data
import axios from "axios"
export  function  createUser(user)  {
  return new Promise(async(resolve)=>{
  
    try{
    const data = await axios.post("http://localhost:8080/users", user)
    
    resolve({data})
    }
    catch(error){
      console.log(error)
    }
  })
 
}

export  function  checkUser(user)  {
  
  return new Promise(async(resolve,reject)=>{
    const passwordFromFrontEnd = user.password
     const data = await axios.get(`http://localhost:8080/users?email=${user.email}`)

    if(data.data.length == 0){
      reject({data : "User Not Found"})
    }

    else if(data.data.length && data.data[0].password !== passwordFromFrontEnd)
    reject({data : "User Not Found"})

    resolve({data})
  })
 
}
