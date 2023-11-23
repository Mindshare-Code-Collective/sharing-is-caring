import React from 'react'
import Slider from "react-slick"
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./messagesSlider.scss"


const MessagesSlider = (props) => {
    const {userObject, userInfo} = props;
    const settings = {
        dots:true,
        autoplay:true,
        infinite:true,
        speed:3000,
        autoplaySpeed:3000,
        swipeToSlide:true,
        slidesToShow:userObject.conversations.length > 2 ? 2 : 1,
        slidesToScroll:1,
    }
  return (
    userObject && userObject.conversations &&
      <Slider {...settings} style={{width:"500px"}} className=''>
      {
           userObject.conversations.map((conversation, index) => {

          const lastMessage = conversation.messages[conversation.messages.length-1];

          return <div className="message-div">
            <Link to={`/messages/${conversation._id}`} className="message_container text-decoration-none"> 
          <div key={index} className="slider-content d-flex flex-column justify-content-center align-items-center">

                  <p className="review-text">{conversation.product.name}</p>
                  <img src={conversation.product.picture} alt="Aa" />

                  <h6 className="message-content">{lastMessage?.messageContent}</h6>

                  <h6 className='message-user'>{
                      userInfo.id === conversation.owner._id ? 
                      conversation.customer.name.charAt(0).toUpperCase() +
                      conversation.customer.name.slice(1) : conversation.owner.name.charAt(0).toUpperCase() + conversation.owner.name.slice(1)
                  } 
                  </h6>       
          </div>
          </Link>
          </div>
          })
      }
  </Slider>

  )
}

export default MessagesSlider;
