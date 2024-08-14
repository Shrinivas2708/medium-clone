
function SkeletonLoading() {
  return <div role="status" className="animate-pulse max-w-[200%]   ">
  <div className="flex justify-center gap-2 w-screen ">
    <div className="h-8 bg-gray-200 rounded-full  w-8"></div>
    
    <div className=" flex md:w-[35%] w-[45%]   items-center gap-2">
    <div className="h-3.5 bg-gray-200 rounded-full w-[60%] md:w-[60%] "></div> 
    <div className="h-3.5 bg-gray-200 rounded-full md:w-[30%] w-[30%]"></div>     
      
    </div>
  </div>
  <div className="flex  mt-1 justify-center">

    <div className="h-3.5 w-[50%] bg-gray-200 rounded-full md:w-[35%] "></div>
  </div>
  <div className="flex  mt-1 justify-center">

    <div className="h-3.5 w-[50%] bg-gray-200 rounded-full md:w-[35%] "></div>
  </div>
  <div className="flex  mt-1 justify-center">

    <div className="h-3.5 w-[50%] bg-gray-200 rounded-full md:w-[35%] "></div>
  </div>
</div>
  
  
}

export default SkeletonLoading