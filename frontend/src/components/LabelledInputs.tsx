import { ChangeEvent } from "react"

interface LabelledInputsTypes {
    label:string,
    placeHolder:string,
    type:string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function LabelledInputs({label,placeHolder,type,onChange}:LabelledInputsTypes) {
  return (
    <div className="flex flex-col gap-2 my-2" >
      <label className="block text-base font-medium font-poppins ">{label}</label>
      <input
        className="appearance-none w-[100%] py-2 px-2 text-l text-gray-700 border border-gray-300 rounded-md "
        type={type}
        onChange={onChange}
        placeholder={placeHolder}
      />
    </div>
  )
}

export default LabelledInputs