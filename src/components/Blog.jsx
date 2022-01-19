import React from 'react'
import './Blog.css'
import '../css/responsive.css'
import FirstLastPart from './blogParts/FirstLastPart'
import img1 from"../images/our_img1.jpg"
import img3 from"../images/our_img3.jpg"
import img4 from"../images/our_img4.jpg"
import img5 from"../images/our_img5.jpg"
import SecondPart from './blogParts/SecondPart'
import ThirdPart from './blogParts/ThirdPart'
const Blog = () => {
    const firstLastPartArray=[
        {
            heading:"The biggest and most awesome Photo of  year",
            detail:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model",
            author:"Blogger",
            
        },{
            heading:"Our food Quick is comment",
            detail:"ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id",
            
        }
    ]
    const thirdPartArray=[{
heading:"Chad-Montano",
detail:"ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimquis nostrud exercitation ullamco laboris",
author:"Blogger",
img:img3

    },
{
heading:"Amezing Place",
detail:"ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimquis nostrud exercitation ullamco laboris",
author:"Blogger",
img:img4
}
]
    return (
        <div className="blog_main">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Our Blogs</h2>
                     <span>It is a long established fact that a reader will be distracted by the readable content of a page </span>
                  </div>
               </div>
            </div>
            <FirstLastPart heading={firstLastPartArray[0].heading} detail={firstLastPartArray[0].detail} author={firstLastPartArray[0].author} img={img1}/>
            <SecondPart/>
            <div className='d-flex justify-content-around mb-4'>
            {thirdPartArray.map(val=>(
                <ThirdPart heading={val.heading} detail={val.detail} author={val.author} img={val.img}/>
            ))}</div>
            
            <FirstLastPart heading={firstLastPartArray[1].heading} detail={firstLastPartArray[1].detail} author={firstLastPartArray[1].author} img={img5}/>
            </div>
            </div>
    )
}

export default Blog
