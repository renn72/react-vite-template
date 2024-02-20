import { ModeToggle } from '@/components/mode-toggle'

const Navbar = () => {
  return (
    <nav className='w-full'>
      <ul className='flex justify-end p-4 w-full'>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
