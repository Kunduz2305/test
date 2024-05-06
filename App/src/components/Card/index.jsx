import React from 'react'
import'./Card.css'

export const Card = ({data}) => {

  // if (data.color){
  //   return <div style={{background: data.color}} className='card'>
  //              {data.title}
  //           </div>
  // }else{
  //   return <div style={{backgroundImage: `url(${data.img})`}} className='card'>
  //   {data.title}
  // </div>
  // }

  // switch (data.color) {
  //   case null:
  //     return(
  //          <div style={{backgroundImage: `url(${data.img})`}} className='card'>
  //              {data.title}
  //           </div>
  //     );
  //     default:
  //       return(
  //         <div style={{background: data.color}} className='card'>
  //             {data.title}
  //          </div>
  //    );
  // }

// return(
//   <>
//    {
//     data.color
//     ?
//     <div style={{background: data.color}} className='card'>        
//        {data.title}
//      </div>
//      :
//      <div style={{backgroundImage: `url(${data.img})`}} className='card'>
//          {data.title}
//      </div>
//    }
//   </>
// );

return <>
{
  data.color  &&  <div style={{background: data.color}} className='card'>        
             {data.title}
            </div>    
}
{
  data.color === null && <div style={{backgroundImage: `url(${data.img})`}} className='card'>
            {data.title}
          </div>
}
</>
};

// &&  деген эгер туура болсо