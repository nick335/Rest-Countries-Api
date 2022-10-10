import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { useSelector } from "react-redux";


export default function CountrySkeleton(){
  const { darkTheme } = useSelector(state => state.country)
  return(
    <SkeletonTheme baseColor={` ${ darkTheme ? '#1F2932' : '#f5f5f5' }`} highlightColor={`${darkTheme ? '#2B3945' : '#ffffff' }`} className="trans">
      <div className="flex flex-col bg-neutralText dark:bg-darkThemeHeader h-fit mb-14 rounded-md shadow-lg w-3/4  mx-auto sm:mx-0 sm:w-64">
        <div className="m-0 block -mt-1">
        <Skeleton width={'100%'} height={176} className='m-0 block' />          
        </div>
        <div className="pt-7 pl-6 pb-10">
          <div className="pb-3">
            <Skeleton width={ '90%' } height={9} />
          </div>
          <div className="pb-0.5">
            <Skeleton width={150} height={9} />
          </div>
          <div className="pb-0.5">
            <Skeleton width={150} height={9} />
          </div>
          <div className="pb-0.5">
            <Skeleton width={150} height={9} />
          </div>
        </div>
      </div>
      
    </SkeletonTheme>
  )
}