import axios from "axios";
export  const getCategory = async ()=>{
    const url = "https://dummyjson.com/products/categories";
    const data = await axios.get(url);
    if(!data){
        return "No category found.";
    }
    return data.data;
}