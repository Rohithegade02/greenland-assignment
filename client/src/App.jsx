import Header from './components/Header'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className=''>
      <Header />
      <div className='flex h-[90vh]'>
        <div className='flex-[0.35] '>
          <Sidebar />
        </div>
        <div className='flex-1'>
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default App
