// A mock function to mimic making an async request for data
import axios from "axios";
export function fetchProducts() {
  return new Promise((resolve) =>
   { 
    
    const call = async()=>{
      const data = await axios.get("http://localhost:8080/products");
      // data naam ka object bhejna padega
      resolve({data})
    }
    call()
  
  }
  );
}


export function fetchProductsBySearchParam(filter) {
  return new Promise((resolve) =>
   { 
    let query = "";
    filter.forEach(ele => query+=`${ele.searchParam}=${ele.value}&`)
    console.log(filter)
    const call = async()=>{
      const data = await axios.get(`http://localhost:8080/products?${query}`);
      resolve({data})
    }
    call()
  
  }
  );
}

export function fetchProductsBySortParam(filter) {
  return new Promise((resolve) =>
   {  let query = "";
      filter[2].forEach(ele => query+=`${ele.searchParam}=${ele.value}&`)
      
    const call = async()=>{
      console.log(`http://localhost:8080/products?${query}_sort=${filter[0]}&_order=${filter[1]}`)
      const data = await axios.get(`http://localhost:8080/products?${query}_sort=${filter[0]}&_order=${filter[1]}`);
      resolve({data})
    }
    call()
  
  }
  );
}


