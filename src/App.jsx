import { useState } from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import CardConteiner from './components/CardConteiner'

function App() {

  const [filter, setFilter] = useState('All') // 3 estados All, Active, Inactive
  
  return (
    <main className='bg-Neutral-200 dark:dark-gradient min-h-screen flex flex-col items-center'>
      <section className='w-[343px] my-6 md:w-[678px] xl:w-[1170px]'>
        <Header/>
        <Filters filter={filter} setFilter={setFilter}/>
        <CardConteiner filter={filter} />
      </section>
      
      

    </main>
  )
}

export default App
