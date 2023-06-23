// A mock function to mimic making an async request for data
import axios from "axios";
export function fetchProducts() {
  return new Promise((resolve) =>
   { 
    
    const call = async()=>{
      const data = await axios.get("http://localhost:8080/products");

      resolve({data})
    }
    call()
  
  }
  );
}


export function fetchProductsBySearchParam(filter, sort, Page) {
  return new Promise((resolve) =>
   { 
    let query = "";
    for(let ele in filter)
      {
        if(filter[ele].length){
          const item = filter[ele][filter[ele].length - 1]
          query += `${ele}=${item}&`
        }
      }

    for(let ele in sort)
      query += `${ele}=${sort[ele]}&`


    console.log(Page)
    for(let ele in Page)
      query += `${ele}=${Page[ele]}&`
    console.log(`http://localhost:8080/products?${query}`)
    const call = async()=>{
      const data = await axios.get(`http://localhost:8080/products?${query}`);
      const x = await   data.headers.get("X-Total-Count")
      console.log(data)
      resolve({data : {products:data.data, totalItems : x}})
    }
    call()
  
  }
  );
}


