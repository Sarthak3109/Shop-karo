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

export function fetchBrands() {
  return new Promise((resolve) =>
   { 
      const call = async()=>{
      const data = await axios.get("http://localhost:8080/brands");
     resolve({data})
    }
    call()
  
  }
  );
}

export function fetchCategories() {
  return new Promise((resolve) =>
   { 
    
    const call = async()=>{
      const data = await axios.get("http://localhost:8080/categories");

      resolve({data})
    }
    call()
  
  }
  );
}



export function fetchProductsById(id) {
  return new Promise((resolve) =>
   { 
  
    const call = async()=>{
     
      const data = await axios.get(`http://localhost:8080/products?id=${id}`);
     
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



    for(let ele in Page)
      query += `${ele}=${Page[ele]}&`

    const call = async()=>{
      const data = await axios.get(`http://localhost:8080/products?${query}`);
      const x = await   data.headers.get("X-Total-Count")
    
      resolve({data : {products:data.data, totalItems : x}})
    }
    call()
  
  }
  );
}


