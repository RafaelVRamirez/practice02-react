import data from '../../data.json'
import Card from "./Card"

const CardConteiner = () => {
    
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-2'>
        {
            data.map(extension => (
             <Card 
                key={extension.name} 
                {...extension}
             />
            ))
        }
    </div>
  )
}

export default CardConteiner