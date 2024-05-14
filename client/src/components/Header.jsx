import {
  Camera,
  ChevronDown,
  CircleUserRound,
  HeartCrack,
  MessageSquareMore,
  Users,
} from 'lucide-react'

const Header = () => {
  return (
    <div className='max-w-[100vw] flex items-center justify-between bg-[#252525] h-[10vh] px-5'>
      <div className='flex flex-col items-start'>
        <div>
          <h1 className='text-[24px] text-[#fff] font-bold'>
            secret <span className='bg-[#d32d5e] px-1 rounded-md'>desires</span>
          </h1>
        </div>
        <div>
          <h1 className='text-[12px] text-[#6f6b69]'>Open Beta</h1>
        </div>
      </div>
      <div className='flex items-center gap-10'>
        <div className='flex items-center gap-1'>
          <div>
            <MessageSquareMore
              style={{
                height: '20px',
                width: '20px',
                color: '#000',
                fill: '#d32d5e',
                stroke: '#252525',
              }}
            />
          </div>
          <div className=' absolute top-[9.5%] left-[30%] h-[2px] w-[100px] bg-[#d32d5e]'></div>
          <div>
            <p className='text-[16px] text-[#d32d5e] '>Chat</p>
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <div>
            <Users
              style={{
                height: '20px',
                width: '20px',
                fill: '#fff',
                stroke: '#fff',
                strokeWidth: '1px',
              }}
            />
          </div>
          <div>
            <p className='text-[16px] text-[#fff]'>My Characters</p>
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <div>
            <Camera
              style={{
                height: '20px',
                width: '20px',
                fill: '#fff',

                strokeWidth: '1px',
              }}
            />
          </div>
          <div>
            <p className='text-[16px] text-[#fff]'>Generate Images</p>
          </div>
        </div>
        <div>
          <button className='bg-[#d32d5e] flex p-2.5 rounded-md items-center gap-2'>
            <div>
              <HeartCrack
                style={{
                  height: '20px',
                  width: '20px',
                  // fill: '#fff',
                  stroke: '#fff',
                  // strokeWidth: '1px',
                }}
              />
            </div>
            <div>
              <p className='text-[16px] text-[#fff] font-medium'>
                Create Character
              </p>
            </div>
          </button>
        </div>
      </div>
      <div className='flex items-center gap-1'>
        <div>
          <CircleUserRound
            style={{
              height: '20px',
              width: '20px',
              color: '#000',
              // fill: '#fff',

              stroke: '#fff',
            }}
          />
        </div>
        <div>
          <p className='text-[#fff]'>My Profile</p>
        </div>
        <div>
          <ChevronDown
            style={{
              height: '25px',
              width: '25px',
              fill: '#fff',
              strokeWidth: '1px',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
