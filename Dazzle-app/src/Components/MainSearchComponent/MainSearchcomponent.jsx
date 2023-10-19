import React from 'react'
import Header from '../HeaderComponent/Header';
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import './mainsearchcomponent.css'
import { useEffect,useState } from 'react';
import { nearBySalon } from '../../Service/api';
import { useFormik } from 'formik';
import {  Routes, Route, Link,Outlet ,useLocation} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import * as yup from 'yup';
import MainSearchpopular from './MainSearchPopular/MainSearchpopular';
import { ShopOverViewComponent } from '../ShopOverViewComponent/ShopOverViewComponent';
import MainSearchShoplist from './MainSearchShopList/MainSearchShoplist';

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

function MainSearchcomponent() {

    const [mainSearchList,setMainSearchList] = useState([])
    const [fliterSearchList,setFliterMainSearchList] = useState([])
    const [dropDownState,setdropDownState] = useState("intial");
    const [showdrop,setShowrop]=useState(false);
    let query = useQuery();
    const[showallval,setShowallVal] = useState('')
    const [currentpath,setCurrenrpath] = useState(''); 

    const navigate = useNavigate();



    const MainSearchSchema = yup.object().shape({

        searchkeyword:yup.string()

    })

    const onSubmit = () =>{
        if(showallval != '') 
        {
            navigate(`/search?name=${showallval}`);
            // setShowallVal(query.get("name"));
            
        }
    console.log("sumbit prompt",showallval);
    }

    const {values,handleBlur,handleChange,touched,errors,handleSubmit} = useFormik({

        initialValues:{

            searchkeyword:showallval
    
        },
        validationSchema:MainSearchSchema,

        onSubmit
    
    });
    useEffect(()=>{

        setCurrenrpath(window.location.href.split("/")[3]);
        console.log("test----");
    })

    // document.addEventListener("scroll", (event) => {

    //     // lastKnownScrollPosition = window.scrollY;
    //     console.log("addddddddddddddddddddddddddddddddddd");
    
    // });

    //Intial Effect
    useEffect(()=>{

        const mainSearchAll = async() =>{

       try{

           const res = await nearBySalon();
           const searchAllData = await res.json();
           setMainSearchList(searchAllData);
       }
       catch(error){

           console.log(error.stack)
       }

        }

        mainSearchAll();
        console.log("dddddddddddddddddddddd",currentpath)



        },[])

    //get Input method
    const handlerChange = async(event) =>{

        // handleChange(event.target.value);

        // values.searchkeyword = event.target.value

        await setShowallVal(event.target.value);
        
        values.searchkeyword = showallval

        if(event.target.value)
        {
           const temp = event.target.value.toLowerCase();
           console.log('lower',temp);
           const fliList = await mainSearchList.filter((data) => {return data.shopName.toLowerCase().includes(temp)});
           setFliterMainSearchList(fliList);
           console.log("temp list ",fliList);
           setdropDownState("value");
           setShowrop(true);
        }
        else if(event.target.value === ''){

            setdropDownState("intial");
            setShowrop(false);

        }
        else
        {
            setdropDownState("empty");
            setShowrop(true);
        }
    }
   
    //select the option
    const selectClick = (prompt) => {

        setShowrop(false);
        navigate(`/search?name=${prompt}`);
        setShowallVal(prompt);
        console.log("prompt valuess",prompt);
    }

    //show drop down list 
    const showDropDown =(state)=>{
        switch(state){
            case 'value': 
            console.log("all list ",mainSearchList);
            return(
            <div>
                <div className='main-search-card-container'>
                {
                fliterSearchList.map((data,i)=>(
                        <div className="main-search-card" key={i} onClick={() => selectClick(data.shopName)}>
                            <div className="main-search-img">
                                <img src={data["img"]} />
                            </div>
                            
                           <div className="main-seach-shopname-type">
                           <div className="main-seach-shopname">
                           <span>{data["shopName"]}</span>
                           </div>
                           <div className="main-search-type">
                            <span>Salon Shop</span>
                           </div>
                           </div>

                        </div>
                ))
               }
                </div>
               <div className='main-search-search-all' onClick={() => selectClick(showallval)}>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_50,h_50,c_fill/Icons-Autosuggest/AS_Search_3x.png" alt="" />
                 <span>Search results for <span>
                 '{showallval}'
                    </span>
                    </span>
                 </div>
               </div>
            );

            case 'empty': return(<div>empty state</div>);

            default : 
            return(<div>Intial state</div>);
        }

    }

    //reset input field 
    const resetInput = () => {
        setShowallVal('');
        handleChange('');
        values.searchkeyword = '';
        setShowrop(false);

    }

    console.log("errorsss",errors);

    const onFocus = () => {
        console.log("on focus check");
    }
   
    console.log("current path",window.location.pathname,window.location.href.split("/")[3]);

  return (
    <div className='main-search-main-container'>
        <div className="app-header">
            <Header/>
    </div>
      <div className="main-search-inner-container">
      <div className="main-search-container">
      <div className="main-search1">
      <form className="main-seach" onSubmit={handleSubmit}>
    <div className="main-search-input">
        <input id="searchkeyword" type="text" value={showallval} placeholder='Search for Salon and Services...' onChange={(e) =>{handlerChange(e)}} onSubmit={handleSubmit}/>
    </div>
    <div className="main-search-btn">
        {
          showallval === '' ? <button type='submit'><span><BiSearch/></span></button> :
          <span><AiOutlineClose onClick={() => {resetInput()}}/>
          <button type='submit'></button>
          </span>
        }
    </div>
       </form>
      </div>

      <div className={showdrop ? "main-search-drop-down":"show-search-drop"}>
         {
          showDropDown(dropDownState)
         }
      </div>

      <div className="main-search-outlet-container">

     {
      currentpath.toString() === 'search' ||  query.get("name") === '' ? <MainSearchpopular /> : <MainSearchShoplist/>
     }
        
      </div>
    
</div>
      </div>


    </div>
  )
}

export default MainSearchcomponent;