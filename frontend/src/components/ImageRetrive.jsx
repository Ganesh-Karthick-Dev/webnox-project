import React, { useEffect, useState } from "react";
import axios from "axios";
import '../style.css'
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";



const ImageRetrive = () => {

  const [image, setImage] = useState([]);

  const [grid, setGrid] = useState("");

  const handleDelImg = (val)=> {
    console.log(`image deleted`);
    let imageId = val._id;
    axios
        .delete(`http://localhost:8000/delete${imageId}`)
        .then((res)=>{
          console.log(res.data);
          // window.location.reload()
        })
        .catch((err)=>{
          console.log(`got error while delete image in the backend - ${err}`);
        })
  }

  const grid4 = ()=> {
    setGrid("grid-cols-4")
  }

  useEffect(()=>{

    grid4()

  },[])


  useEffect(() => {

    axios
      .get(`http://localhost:8000/retrive`)
      .then((res) => {
        let imageArray = res.data.data;
        // console.log(imageArray);
        setImage(imageArray);
      })
      .catch((err) => {
        console.log(err, "error while get data from backend");
      });

  }, [handleDelImg]);

  useEffect(()=>{

    window.scrollTo({
      top:0,
      behavior:'smooth'
    })

  },[])

  // image pop over

  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  const [data1 , setData1] = useState('')

  const handleImgPop = (val)=> {
    
    setData1(val.image)
    setOpen(true)

  }

  // image pop over


  return (
    <>
      <div id='img-upload'>


        <div className=" flex py-3 gap-3 justify-center ">
        <div className=" transition hover:-translate-y-1" onClick={() => setGrid("grid-cols-1")}>
            <svg
              className=" w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 202.622 202.622"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M198.724,0H3.897C1.745,0,0,1.745,0,3.897v194.828c0,2.152,1.745,3.897,3.897,3.897h194.828
				c2.152,0,3.897-1.745,3.897-3.897V3.897C202.621,1.745,200.876,0,198.724,0z M7.793,194.828V7.793h187.034v187.035H7.793z"
                    />
                    <rect
                      x="27.276"
                      y="97.414"
                      width="148.069"
                      height="7.793"
                    />
                    <rect
                      x="27.276"
                      y="132.483"
                      width="148.069"
                      height="7.793"
                    />
                    <rect
                      x="27.276"
                      y="27.276"
                      width="148.069"
                      height="7.793"
                    />
                    <rect
                      x="27.276"
                      y="167.552"
                      width="148.069"
                      height="7.793"
                    />
                    <rect
                      x="27.276"
                      y="62.345"
                      width="148.069"
                      height="7.793"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className=" transition hover:-translate-y-1" onClick={() => setGrid("grid-cols-2")}>
            <svg
              fill="#000000"
              className=" w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 206.518 206.518"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M93.517,0H3.897C1.743,0,0,1.745,0,3.897v89.621c0,2.152,1.743,3.897,3.897,3.897h89.621
				c2.154,0,3.897-1.745,3.897-3.897V3.897C97.414,1.745,95.671,0,93.517,0z M89.621,89.621H7.793V7.793h81.828V89.621z"
                    />
                    <path
                      d="M202.621,0H113c-2.154,0-3.897,1.745-3.897,3.897v89.621c0,2.152,1.743,3.897,3.897,3.897h89.621
				c2.154,0,3.897-1.745,3.897-3.897V3.897C206.517,1.745,204.774,0,202.621,0z M198.724,89.621h-81.828V7.793h81.828V89.621z"
                    />
                    <path
                      d="M93.517,109.103H3.897C1.743,109.103,0,110.848,0,113v89.621c0,2.152,1.743,3.897,3.897,3.897h89.621
				c2.154,0,3.897-1.745,3.897-3.897V113C97.414,110.848,95.671,109.103,93.517,109.103z M89.621,198.724H7.793v-81.828h81.828
				V198.724z"
                    />
                    <path
                      d="M202.621,109.103H113c-2.154,0-3.897,1.745-3.897,3.897v89.621c0,2.152,1.743,3.897,3.897,3.897h89.621
				c2.154,0,3.897-1.745,3.897-3.897V113C206.517,110.848,204.774,109.103,202.621,109.103z M198.724,198.724h-81.828v-81.828
				h81.828V198.724z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className=" transition hover:-translate-y-1" onClick={() => setGrid("grid-cols-3")}>
            <svg
              fill="#000000"
              className=" w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 202.622 202.622"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M42.863,0H3.897C1.743,0,0.001,1.745,0.001,3.897v38.966c0,2.152,1.743,3.897,3.897,3.897h38.966
				c2.154,0,3.897-1.745,3.897-3.897V3.897C46.759,1.745,45.016,0,42.863,0z M7.794,38.966V7.793h31.172v31.173H7.794z"
                    />
                    <path
                      d="M120.794,0H81.829c-2.154,0-3.897,1.745-3.897,3.897v38.966c0,2.152,1.743,3.897,3.897,3.897h38.966
				c2.154,0,3.897-1.745,3.897-3.897V3.897C124.691,1.745,122.948,0,120.794,0z M85.725,38.966V7.793h31.172v31.173H85.725z"
                    />
                    <path
                      d="M198.725,0h-38.966c-2.154,0-3.897,1.745-3.897,3.897v38.966c0,2.152,1.743,3.897,3.897,3.897h38.966
				c2.154,0,3.897-1.745,3.897-3.897V3.897C202.622,1.745,200.878,0,198.725,0z M194.829,38.966h-31.172V7.793h31.172V38.966z"
                    />
                    <path
                      d="M42.863,77.931H3.897c-2.154,0-3.897,1.745-3.897,3.897v38.966c0,2.152,1.743,3.897,3.897,3.897h38.966
				c2.154,0,3.897-1.745,3.897-3.897V81.828C46.759,79.676,45.016,77.931,42.863,77.931z M7.794,116.897V85.724h31.172v31.173H7.794
				z"
                    />
                    <path
                      d="M120.794,77.931H81.829c-2.154,0-3.897,1.745-3.897,3.897v38.966c0,2.152,1.743,3.897,3.897,3.897h38.966
				c2.154,0,3.897-1.745,3.897-3.897V81.828C124.691,79.676,122.948,77.931,120.794,77.931z M85.725,116.897V85.724h31.172v31.173
				H85.725z"
                    />
                    <path
                      d="M198.725,77.931h-38.966c-2.154,0-3.897,1.745-3.897,3.897v38.966c0,2.152,1.743,3.897,3.897,3.897h38.966
				c2.154,0,3.897-1.745,3.897-3.897V81.828C202.622,79.676,200.878,77.931,198.725,77.931z M194.829,116.897h-31.172V85.724h31.172
				V116.897z"
                    />
                    <path
                      d="M42.863,155.862H3.897c-2.154,0-3.897,1.745-3.897,3.897v38.966c0,2.152,1.743,3.897,3.897,3.897h38.966
				c2.154,0,3.897-1.745,3.897-3.897v-38.966C46.759,157.607,45.016,155.862,42.863,155.862z M7.794,194.828v-31.172h31.172v31.172
				H7.794z"
                    />
                    <path
                      d="M120.794,155.862H81.829c-2.154,0-3.897,1.745-3.897,3.897v38.966c0,2.152,1.743,3.897,3.897,3.897h38.966
				c2.154,0,3.897-1.745,3.897-3.897v-38.966C124.691,157.607,122.948,155.862,120.794,155.862z M85.725,194.828v-31.172h31.172
				v31.172H85.725z"
                    />
                    <path
                      d="M198.725,155.862h-38.966c-2.154,0-3.897,1.745-3.897,3.897v38.966c0,2.152,1.743,3.897,3.897,3.897h38.966
				c2.154,0,3.897-1.745,3.897-3.897v-38.966C202.622,157.607,200.878,155.862,198.725,155.862z M194.829,194.828h-31.172v-31.172
				h31.172V194.828z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className=" transition hover:-translate-y-1" onClick={grid4}>
            <svg
              className=" w-6"
              fill="#000000"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 210.414 210.414"
            >
              <g>
                <g>
                  <path
                    d="M206.517,0h-50.655h-50.655H54.552H3.897C1.743,0,0,1.745,0,3.897v50.655v50.655v50.655v50.655
			c0,2.152,1.743,3.897,3.897,3.897h50.655h50.655h50.655h50.655c2.154,0,3.897-1.745,3.897-3.897v-50.655v-50.655V54.552V3.897
			C210.414,1.745,208.671,0,206.517,0z M50.655,202.621H7.793v-42.862h42.862V202.621z M50.655,151.965H7.793v-42.862h42.862
			V151.965z M50.655,101.31H7.793V58.448h42.862V101.31z M50.655,50.655H7.793V7.793h42.862V50.655z M101.31,202.621H58.448v-42.862
			h42.862V202.621z M101.31,151.965H58.448v-42.862h42.862V151.965z M101.31,101.31H58.448V58.448h42.862V101.31z M101.31,50.655
			H58.448V7.793h42.862V50.655z M151.965,202.621h-42.862v-42.862h42.862V202.621z M151.965,151.965h-42.862v-42.862h42.862V151.965
			z M151.966,101.31h-42.862V58.448h42.862V101.31z M151.966,50.655h-42.862V7.793h42.862V50.655z M202.621,202.621h-42.862v-42.862
			h42.862V202.621z M202.621,151.965h-42.862v-42.862h42.862V151.965z M202.621,101.31h-42.862V58.448h42.862V101.31z
			 M202.621,50.655h-42.862V7.793h42.862V50.655z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div id="img-container" className={`grid ${grid} gap-2`}>

        {
        image !== null &&
          image.map((val) => {
            return (
              
                <div id="img" className=" border flex text-center relative" key={val.id}>
                <img
                  className=" object-cover w-fit"
                  src={`http://localhost:8000/${val.image}`}
                  alt=""
                  onClick={()=>handleImgPop(val)}
                />
                <button id="del-button" className="absolute m-2 top-0 right-0 rounded-md p-2 bg-red-500 text-white opacity-0 hover:opacity-100 transition duration-300" onClick={()=>handleDelImg(val)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                </button>
                </div>
              
            );
          }) 
        
          }


        </div>

        {
          image !== null && image.length === 0  ? <h2 className=" h-screen flex justify-center items-center text-2xl font-bold">Gallery is empty , nothing to show</h2> : ''
        }

      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          <h3>{data1}</h3>
                        </Dialog.Title>
                        <div className="mt-2">
                          <img src={`http://localhost:8000/${data1}`} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

    </>
  );
};

export default ImageRetrive;
