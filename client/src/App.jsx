import Header from './components/Header'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className=''>
      {/* header component */}
      <Header />
      <div className='flex h-[90vh]'>
        <div className='flex-[0.35] '>
          {/* sidebar component */}
          <Sidebar />
        </div>
        <div className='bg-[#D32D5E] w-[5px]'></div>
        <div className='flex-1'>
          {/* chat component */}
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default App
