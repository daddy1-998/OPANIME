import React, { useEffect } from 'react'
import { FaStar } from 'react-icons/fa';
import { IoMdDownload } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";

function AnimeTrending() {
  const animes = [
    {
      id: 1,
      title: "Solo Leveling Arise From Shadow",
      image: "https://comicvine.gamespot.com/a/uploads/scale_large/11160/111607459/9275134-sololeveling-c022%28v08%29-p000%5Bcover%5D%5Bdig%5D%5Byenpress%5D%5Blucaz%5D.jpg",
      rating: "4",
      watch: "https://installchecker.com/cl/i/me4rmw",
      download: "https://installchecker.com/cl/i/me4rmw"
    }
  ]

  return (
    <>





        <menu className='w-full  calcHeight flex items-center  justify-center flex-wrap gap-[20px] p-t-[20px] '>



          {animes.map((anime, index) => {

            const { title, image, type, rating, watch, download } = anime;
            return (

              <div key={index} className='font-Poppins uppercase text-white w-[350px] h-[500px] bg-red-500 flex flex-col items-center gap-[15px] rounded-[10px] overflow-hidden'>
                <div className='w-full h-[350px] '>
                  <img className='w-full h-full object-cover center ' src={image} alt={title} />
                </div>
                <div className='flex flex-col items-center gap-[20px]'>
                  <h1 className=' font-bold  tracking-[1px]'>{title}</h1>
                  <p className='flex items-center gap-4'>
                  {Array.from({ length: rating }, (_, index) => (
                    <FaStar key={index} className="text-yellow-500"  />
                  
                  ))}
                  </p>
                 
                </div>
                <div className='p-[2%] w-full flex items-center justify-evenly gap-[20px] flex-row'>

                  <a href={download} target="_blank" className='bg-primary text-white  font-bold flex items-center gap-3 '><IoMdDownload/> Download</a>
                  <a href={watch} target="_blank" className='bg-primary text-white  font-bold flex items-center gap-3 '><BiMoviePlay/> Watch</a>

                </div>
              </div>
            )
          })}

        </menu>


    </>
  )
}

export default AnimeTrending
