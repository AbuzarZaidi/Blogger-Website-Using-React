import React from "react";
import LikeImg from "../../images/like.png";
import CommentImg from "../../images/comm.png";
import '../../css/responsive.css'
import "./ThirdPart.css";
const ThirdPart = ({ img, heading, detail, author }) => {
  return (
    
    <div class="col-md-6 padding_bottom2 mb-4 me-4">
      <div class="our_img">
         <figure><img src={img} alt="#"/></figure>
      </div>
       <div class="our_text_box three_box">


          <div class="post_box d_flex padding_top3">
             <h3 class="awesome padding_flot">{heading}</h3>
             <h4 class="flot_left1">Post By : {author} </h4>
             <ul class="like padding_left2">
                <li><a href="#"><img src={LikeImg} alt="#"/>Like</a></li>
                <li><a href="#"><img src={CommentImg} alt="#"/>Comment</a></li>
             </ul>
          </div>
          <p>{detail} </p>
       </div>
    </div>


  );
};

export default ThirdPart;
