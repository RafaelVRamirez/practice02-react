import Botones from "./Botones";


const Filters = ({filter, setFilter} ) => {

  const handleClick = (event) =>{
    //event.target.textContent = captura el nombre del boton (All, Active, Inactive)
    
    setFilter(event.target.textContent);
  }

  return (
    <div className="mb-6 md:flex md:items-center md:justify-between">
      <h2 className="dark:text-Neutral-0 m-3 text-center text-[2.125rem] font-bold">Extensions List</h2>
      <div className="flex place-content-between md:gap-4">
        <Botones active={filter === 'All'} handleClick={handleClick}>All</Botones>
        <Botones active={filter === 'Active'} handleClick={handleClick}>Active</Botones>
        <Botones active={filter === 'Inactive'} handleClick={handleClick}>Inactive</Botones>
      </div>
    </div>
  )
}

export default Filters



