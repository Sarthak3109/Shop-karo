import React from 'react'
import { ITEMS_PER_PAGE } from '../../app/constants';
const Pagination = ({page,setpage, totalItems,}) => {
  return (
    <div>
         <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className = {`flex flex-1 ${page == 1 || page == Math.ceil(totalItems/ITEMS_PER_PAGE) ? 'justify-center' : 'justify-between'} sm:hidden sm:justify-between`}>
            {
                page === 1
                ?
                <>
                </>
                :
                <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick = {e=>{e.preventDefault(); if(page == 1)setpage(Math.ceil(totalItems/ITEMS_PER_PAGE)) ; else setpage(page-1)}}
              >
                Previous
              </a>
              }
           
              {
                page === Math.ceil(totalItems/ITEMS_PER_PAGE)
                ?
                <>
                </>
                :
                <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick = {e=>{e.preventDefault(); if(page == Math.ceil(totalItems/ITEMS_PER_PAGE))setpage(1) ; else setpage(page+1)}}
              >
                Next
              </a>
              }
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{(page-1)*ITEMS_PER_PAGE + 1}</span> to{' '}
                  <span className="font-medium">{ Math.min(totalItems,page * ITEMS_PER_PAGE)}</span> of{' '}
                  <span className="font-medium">{totalItems}</span> results
                </p>
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  {/* <a
                    href="#"
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  > */}
                    <span className="sr-only">Previous</span>
                   
                  {/* </a> */}
                 
              

                  {
                    Array.from(Array(Math.ceil(totalItems/ITEMS_PER_PAGE)))
                    .map((ele,idx)=>(
                      <>
                      
                        <div
                    href="#"
                    onClick={e=>setpage(idx+1)}
                    aria-current="page"
                    className={`relative z-10 border-2  inline-flex cursor-pointer items-center ${idx+1 === page ? `bg-indigo-600` :  `bg-indigo-400`} px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                  >
                    {idx+1}
                    </div>
                  
                    </>
                      
                    ))
                  
                  }

                  {/* <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  > */}
                    <span className="sr-only">Next</span>
                 
                  {/* </a> */}
                </nav>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Pagination