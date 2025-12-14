import { Toggle } from "rsuite"
import 'rsuite/Toggle/styles/index.css';
import Botones from "./Botones"

const Card = ({logo, name, description, isActive,extensions, setExtensions}) => {

  const onToggle = () => {
    const currentExtension = extensions.filter(extension => extension.name === name )[0];
    
    const updateExtension = {...currentExtension, isActive: !currentExtension.isActive};
    
    const newExtensions = extensions.map(extension => {
      if (extension.name === name){
        extension = {...updateExtension}
      }
      return extension;
    })

    setExtensions(newExtensions);
  }

  const onRemove = () => {
    
    const filteredExt = extensions.filter( extension => extension.name !== name);
    setExtensions(filteredExt);
  }

  return (
    <div className="bg-Neutral-100 rounded-lg p-4 shadow-sm dark:bg-Neutral-700">
        
        <div className="flex gap-4 items-start mb-4">
            <img src={logo} alt="logo" />
            <div>
                <h2 className="text-[1.15rem] font-bold mb-2 dark:text-Neutral-0">{name}</h2>
                <p className="text-Neutral-600 text-[.9375rem] dark:text-Neutral-300">{description}</p>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <Botones handleClick={onRemove} textSmall>Remove</Botones>
            <Toggle onClick={onToggle} color="red" checked={isActive} />
        </div>
        
    </div>
  )
}

export default Card