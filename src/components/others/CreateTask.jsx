import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
    <form className="w-full flex items-center justify-between p-5">
      <div className="w-1/2 ">
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
          <input
            type="text"
            placeholder="employee name"
            className="w-4/5 text-sm py-1 px-2 mb-4 bg-transparent border-[1px] border-gray-400 rounded outline-none"
          />
        </div>

        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
          <input
            type="text"
            placeholder="employee name"
            className="w-4/5 text-sm py-1 px-2 mb-4 bg-transparent border-[1px] border-gray-400 rounded-md outline-none"
          />
        </div>

        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
          <input
            type="text"
            placeholder="employee name"
            className="w-4/5 text-sm py-1 px-2 mb-4 bg-transparent border-[1px] border-gray-400 rounded-md outline-none"
          />
        </div>

        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
          <input
            type="text"
            placeholder="employee name"
            className="w-4/5 text-sm py-1 px-2 mb-4 bg-transparent border-[1px] border-gray-400 rounded-md outline-none"
          />
        </div>
      </div>

      <div className="w-2/5 flex flex-col items-start ">
        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
        <textarea
          className="w-full h-44 text-sm px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 "
          name=""
          id=""
          cols={30}
          rows={10}
        ></textarea>

        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
          Create Task
        </button>
      </div>
    </form>
  </div>
  )
}

export default CreateTask