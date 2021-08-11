import { useEffect, useState } from "react";

export function UseTimeout2(delay,value) {
    const [start, setStart] = useState(value)

  useEffect(() => {
    
   const timmer = setInterval(function () {
                setStart(function (prevCounter) {
                  if (Number(prevCounter) === 0) {
                       console.log(1)
        clearInterval(timmer)
      }
                    return Number(prevCounter) - 1
                })
        
         
               
            }, delay)
  },[delay])


  


    
  return start
}