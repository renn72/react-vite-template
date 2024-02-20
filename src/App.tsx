import CountBtn from '@/components/CountBtn'
import ReactSVG from '@/assets/react.svg'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/navbar'

function App() {
  return (
    <main className='flex flex-col items-center h-screen'>
        <Navbar />
      <div className='flex flex-col items-center justify-center gap-y-4 w-full h-full'>
        <div className='inline-flex items-center gap-x-4'>
          <img
            src={ReactSVG}
            alt='React Logo'
            className='w-32'
          />
          <span className='text-6xl'>+</span>
          <img
            src={'/vite.svg'}
            alt='Vite Logo'
            className='w-32'
          />
        </div>
          <Badge variant='outline'>shadcn/ui</Badge>
        <CountBtn />
      </div>
    </main>
  )
}

export default App
