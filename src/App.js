import React,{useCallback, useEffect,useState} from 'react';
import './App.css';
import { Carouseel } from './Carousel';
import Card from './Card';
import {MenuOutlined,ShoppingCartOutlined,UserOutlined} from "@ant-design/icons";
import {Input,Select} from 'antd';

const App = () => {

  const [data,setdata]=useState({
    productlist:[],
    categories:[],
    categoriesData:'All',
    AllData:[]
  })

  useEffect(() => {
    getAllProducts()
    getAllCategories();
 
     }, [])

     useEffect(() => {
      Categoriesdata()
    },[data.categoriesData])
    

  const getAllCategories=useCallback(async()=>{
   
    const response=await fetch('https://fakestoreapi.com/products/categories');
    const data=await response.json();

    let categoriesOptions=data.map((e)=>{
      return {label:e,value:e}
    })
    categoriesOptions.push({label:"ALL Categories",value:"All"})
    setdata((prev)=>{
      return {
        ...prev,
        categories:categoriesOptions

      }
    })
    
    },[])

    const getAllProducts=useCallback(async()=>{
   
      const response=await fetch('https://fakestoreapi.com/products');
      const data=await response.json();
      setdata((prev)=>{
        return {
          ...prev,
          productlist:data,
          AllData:data
        }
      })
      
      },[])



    const Categoriesdata=useCallback(async()=>{
   
      if(data?.categoriesData==='All')
      {
        return getAllProducts();
      }
      const response=await fetch(`https://fakestoreapi.com/products/category/${data.categoriesData}`);
      const responsedata=await response.json();
  
    
      setdata((prev)=>{
        return {
          ...prev,
          productlist:responsedata
  
        }
      })
      
      },[data])


      const SearchFunction=useCallback(async(e)=>{
   
        
      
        setdata((prev)=>{
          return {
            ...prev,
            productlist:prev.AllData.filter((ele)=>ele.title.includes(e))
    
          }
        })
        
        },[])


 
    
return (
<div>
  <Carouseel/>
  <div style={{display:'flex',justifyContent:"center",alignItems:"center",flexWrap:"wrap",marginTop:"2%",marginBottom:"2%"}}>
    {data.productlist.map((e)=><Card price={e.price} title={e.title} url={e.image}/>)}
 
  </div>

<div className='NavBarContainer'>
 <div className='Navbar'>
 <div>
  <MenuOutlined style={{color:'white',fontSize: '30px',fontWeight:"bolder"}}/>
  </div>
  <div className='categories'>
  <Select
    showSearch
    placeholder="All Categories"
    optionFilterProp="children"
    defaultValue="All"
    size='medium'
    onChange={(e)=>setdata((prev)=>{
      return {
        ...prev,
        categoriesData:e
      }
    })}
    // onSearch={onSearch}
    // filterOption={(input, option) =>
    //   (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    // }
    options={data.categories}
  />
  </div>
  <div className='searchBox'>
  <Input.Search placeholder="Search your products" 
  onSearch={SearchFunction} 
  style={{ width: 500 }} />

  </div>
  <div className='cart'>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
  <ShoppingCartOutlined style={{color:'white',fontSize: '30px',fontWeight:"bolder",marginRight:"1vw"}}/>
  <span style={{color:"white",fontSize:"25px"}}>Cart</span>

    </div>
 <div style={{marginLeft:"2vw"}}>
 <UserOutlined style={{color:'white',fontSize: '30px',fontWeight:"bolder"}}/>
 </div>
  </div>
 </div>
</div>
</div>
)
};
export default App;