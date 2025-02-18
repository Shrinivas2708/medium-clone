import { ChangeEvent } from "react"

interface LabelledInputsTypes {
    label:string,
    placeHolder:string,
    type:string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    css?:string
}

function LabelledInputs({label,placeHolder,type,onChange,css}:LabelledInputsTypes) {
  return (
    <div className={`flex flex-col gap-2 my-2  {${css}}`} >
      <label className="block text-sm md:text-base font-medium font-sans ">{label}</label>
      <input
        className="appearance-none w-[100%] py-2 px-2 md:text-l text-sm text-gray-700 border border-gray-300 rounded-md "
        type={type}
        onChange={onChange}
        placeholder={placeHolder}
      />
    </div>
  )
}

export default LabelledInputs