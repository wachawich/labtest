import React from 'react'

function AlertModel({handleCloseModal}) {
    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 text-black'>
            <div className="bg-white p-6 rounded-xl w-96 sm:w-10/12 md:w-8/12 lg:w-6/12 h-auto max-h-[80vh] overflow-y-auto shadow-lg transition-all transform flex flex-col">
            <h1 className='text-center text-3xl font-bold mb-10 mt-5'>Alert button was clicked</h1>
            <button
                type="button"
                className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                onClick={handleCloseModal}
            >
                close
            </button>
            </div>
        </div>
    )
}

export default AlertModel