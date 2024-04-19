import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
// import ErrorNotification from './ErrorNotification';
// import SuccessNotification from './SuccessNotification';


const ImageUpload = () => {

  // pop over
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  const handleError = ()=> {
    setFile(null)
    setOpen(false)
    setTimeout(()=>{

      window.location.reload()

    },100)
  }

  // pop over

  const [file,setFile] = useState(null)
  // const [text,setText] = useState('')
  const [uploadError,setUploadError] = useState('');
  const [successMsg,setSuccessMsg] = useState('');

  const handleUpload = (e)=> {

    e.preventDefault();

    setFile(null)

    if(!file) {
      setUploadError('please select image file to upload !')
      return 
       ;
    }

    let fileSizeInByte = Math.round(file.size/1024)
    let checkFileExtension = file.name.split('.')
    

    if(fileSizeInByte > 2048) {
      setUploadError('file size should be less than 2mb !')
      return 
      
    }
    else if(checkFileExtension[1] !== 'png' && checkFileExtension[1] !== 'jpg' ){
      setUploadError(`file type should be png , jpg format to upload `)
      return 
        
    }
    else {
      setSuccessMsg(`image uploded successfully`)
      console.log(`image uploded successfully`);

      let formdata = new FormData()
      formdata.append('file',file)


        axios 
            .post(`http://localhost:8000/upload`,formdata)
            .then((res)=>{
              console.log(`image sent to backend`);
              console.log(res.data);
            })
            .catch((err)=>{
              console.log(err,"error while sent data to backend");
            })

      setTimeout(()=>{

        window.location.reload()

      },2000)
    }
  }

  return (
    <>
    <div className=' mt-3 flex flex-col gap-3 text-sm'>
    <h4 className=' text-center font-bold'>Upload Your Image Here</h4>
    
      <form className=' flex flex-col mx-auto w-fit' onSubmit={handleUpload}>

        <input type="file" className=' text-xs my-3' onChange={val => setFile(val.target.files[0])} />

        {/* <input type="text" value={text} onChange={e=>setText(e.target.value)} className=' border border-gray-500'/> */}

        <button 
        type='submit'
        className=' bg-green-400 p-2 hover:shadow-lg rounded-md text-green-800 hover:text-white hover:bg-green-600'
        >Upload</button>
      </form>

    
      {
       successMsg !== '' && <h4 className=' text-green-500 text-center mx-auto p-2 w-fit border border-green-500 rounded-md'>{successMsg}</h4>
      }
      


      <div className=' p-4 m-2 w-fit mx-auto border shadow-lg'>
      <h4 className=' font-bold'>Note : </h4>
      <h4>➡️:-file size should be less than 2MB</h4>
      <h4>➡️:-file type should be jpeg , png</h4>
      </div>
    
    </div>

    {
      uploadError !== '' && <div>
        <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Warning
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">

                          {
                            <h4>{uploadError}</h4>
                          }

                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={handleError}
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
      </div> 
    }

    {
      // successMsg !== '' && <SuccessNotification data={successMsg}/>
    }
    
    </>
  )
}

export default ImageUpload