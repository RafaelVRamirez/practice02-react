
const Botones = ({children, textSmall}) => {
  return (
    <button className={`border border-Neutral-700 rounded-full px-5 py-2 hover:bg-Neutral-700 cursor-pointer hover:text-Neutral-0 dark:text-Neutral-0 dark:bg-Neutral-700 dark:hover:bg-Red-700 dark:border-Neutral-200 ${textSmall ? "text-basic" : "text-[1.25rem]"} `}>{children}</button>
  )
}
export default Botones;



