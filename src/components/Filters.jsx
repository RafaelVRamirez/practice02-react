import Botones from "./Botones";


const Filters = () => {
  return (
    <div className="mb-6 md:flex md:items-center md:justify-between">
      <h2 className="dark:text-Neutral-0 m-3 text-center text-[2.125rem] font-bold">Extensions List</h2>
      <div className="flex place-content-between md:gap-4">
        <Botones>All</Botones>
        <Botones>Active</Botones>
        <Botones>Inactive</Botones>
      </div>
    </div>
  )
}

export default Filters



