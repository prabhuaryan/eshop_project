import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { capitalizeFirstLetter } from '../../utils/utils';
const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  // const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=>{
   getCategory();
  },[])
  const getCategory = async ()=>{
    const url = "https://dummyjson.com/products/categories";
    const data = await axios.get(url);
    if(!data){
      setCategoryData([])
    }else {
      // console.log(data);
      setCategoryData(data.data);
    }
  }
  const getSelectedCategory = (event)=>{
    setSelectedCategory(event.target.innerText);
    document.getElementById('navbar-vertical').classList.remove('show');
  }
  return (
    <div className="col-lg-3 d-none d-lg-block">
    <a
      className="btn d-flex align-items-center justify-content-between bg-primary w-100"
      data-toggle="collapse"
      href="#navbar-vertical"
      style={{ height: 65, padding: "0 30px" }}
    >
      <h6 className="text-dark m-0">
        <i className="fa fa-bars mr-2" />
        {selectedCategory}
      </h6>
      <i className="fa fa-angle-down text-dark" />
    </a>
    <nav
      className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
      id="navbar-vertical"
      style={{ width: "calc(100% - 30px)", zIndex: 999 }}
    >
      <div className="navbar-nav w-100">
        {/* <div className="nav-item dropdown dropright">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
          >
            Dresses <i className="fa fa-angle-right float-right mt-1" />
          </a>
          <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
            <a href="" className="dropdown-item">
              Men's Dresses
            </a>
            <a href="" className="dropdown-item">
              Women's Dresses
            </a>
            <a href="" className="dropdown-item">
              Baby's Dresses
            </a>
          </div>
        </div> */}
        {categoryData.map((category, index)=> <p  onClick={getSelectedCategory} style={{cursor:'pointer'}} className="nav-item nav-link" key={index}>
          {capitalizeFirstLetter(category)}
        </p>)}
      </div>
    </nav>
  </div>

  )
}

export default Category