import { useState } from "react";
import { Icon } from '@iconify/react';
interface IcardItemsProps {
  name: string | number;
  description: string;
  rating: number;
  image: string;
}
const Card=({name,description,rating,image}:IcardItemsProps)=>{
  return <div  className="max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
    <img src={image} alt="" className="w-full h-48 object-cover" />
    <div className="p-4"  >
      <h3  className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{description}</p>
      <div className="mt-3 flex items-center" >
        <span className="text-yellow-500 text-lg font-bold">{rating}</span>
      </div>
    </div>
  </div>
}

// const Card = ({ title, content }: IcardItemsProps) => {
//   const [likeCount, setLikeCount] = useState<number>(0);  
//   const [dislikeCount, setDislikeCount] = useState<number>(0);  

//   const handleLike = () => {
//     setLikeCount(likeCount + 1);
//   };

//   const handleDislike = () => {
//     setDislikeCount(dislikeCount + 1);
//   };

//   return (
// //     <div className="w-full max-w-3xl mx-auto">
// //       <div className="bg-white shadow-md rounded-lg overflow-hidden">
       
// //         <img
// //           src="data:image/jpeg;base64,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" // Use a placeholder for image
// //           alt="yt"
// //           className="className='w-full h-64 object-cover"
// //         />

// //         <div className="p-4">
// //           <h3 className="text-xl text-gray-700 font-extrabold text-center">{title}</h3>
          
// //           <p className="text-xl text-gray-700 font-light text-center">{content}</p>

// //           <div className="flex justify-around items-center mt-4">
// //             <div className="flex items-center">
              
// //               <button onClick={handleLike} className="flex items-center text-lg">
// //                 <Icon icon="mdi:like-outline" className="text-blue-500 hover:text-red-600 mr-2" />
// //                 <span>{likeCount}</span>
// //               </button>
// //             </div>

// //             <div className="flex items-center">

// //               <button onClick={handleDislike} className="flex items-center text-lg">
// //                 <Icon icon="mdi:like-outline" className="text-red-500 hover:text-green-600 mr-2" />
// //                 <span>{dislikeCount}</span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };



export default Card