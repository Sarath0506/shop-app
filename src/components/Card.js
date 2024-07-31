import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/slices/CartSlice'
import { toast } from 'react-hot-toast'; 
import { add} from '../redux/slices/CartSlice';
import './Card.css';



const Card = ({post}) => {
    
    const cart = useSelector((state) => state.cart || []);

    const dispatch = useDispatch();

    function addToCart(){
        dispatch(add(post));
        toast.success("Item added");
    }

    function removeFromCart(){
        dispatch(remove(post.id));
        toast.error("Item removed");
    }

  return (
    <div className="custom-shadow flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl">
        <div>
            <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1"
            >{post.title}</p>
        </div>
        <div>
            <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        <div className="h-[180px]">
            <img src={post.image} alt={post.title} className="h-full w-full "/>
          
        </div>

        <div  className="flex justify-between gap-12 items-center w-full mt-5">

            <div>
               <p className="text-green-600 font-semibold">${post.price}</p>
             </div>
        
            {
                cart.some(item => item.id === post.id)?
                ( <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                    text-[12px] p-1 px-3 uppercase 
                    hover:bg-gray-700
                    hover:text-white transition duration-300 ease-in"
                onClick={removeFromCart}>
                    <p>Remove Item</p> 
                </button>):
                (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                    text-[12px] p-1 px-3 uppercase 
                    hover:bg-gray-700
                    hover:text-white transition duration-300 ease-in"
                onClick={addToCart}>
                    <p>Add to Cart</p>
                </button> )

            }
        </div>
       

    </div>
  )
}

export default Card 