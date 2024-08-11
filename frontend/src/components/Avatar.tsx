
function Avatar({authorName}:{authorName:string | null}) {
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-normal text-gray-600 dark:text-gray-300">{authorName=== null ? "S" : authorName[0]}</span>
</div>
  )
}

export default Avatar