import {
  Camera,
  ChevronLeft,
  EllipsisVertical,
  KeyRound,
  Lock,
  MessageCircle,
  Share2,
  SquarePen,
  Theater,
  X,
} from 'lucide-react'

const Sidebar = () => {
  return (
    <div className=' '>
      <img
        src='/old-lady.jpg'
        alt=''
        className='h-[50vh] w-[100%] drop-shadow-2xl'
      />
      <div className='bg-gradient-to-b from-black to-transparent z-10 absolute top-[10%] left-[0%] max-h-[6vh] w-[25.5vw]'>
        <div className='flex justify-between'>
          <div className='flex'>
            <div className='flex'>
              <ChevronLeft className='text-white' />
              <p className='text-[15px] text-white'>Chats</p>
            </div>
            <div className='ml-2 flex items-center'>
              <p className='text-white'>
                img:<span className='text-[15px] text-[#252525] ml-1'>0</span>
              </p>
              <p className='text-[15px] text-white'>msg</p>
            </div>
          </div>
          <div className='flex gap-2'>
            <div>
              <EllipsisVertical className='text-[white]' />
            </div>
            <div>
              <KeyRound className='text-white' />
            </div>
            <div>
              <Theater className='text-white' />
            </div>
            <div>
              <SquarePen className='text-white' />
            </div>
            <div>
              <X className='text-white' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-t from-black to-transparent z-10 absolute top-[54%] left-[0%] max-h-[6vh] w-[25.5vw]'>
        <div className='mb-5'>
          <p className='font-bold text-[20px] text-[#fff] ml-5'>
            Jessica Anderson
          </p>
          <p className='font-bold text-[12px] text-[#fff] ml-5'>
            @jessica-anderson-2
          </p>
        </div>
      </div>
      <div className='h-[40vh] flex flex-col bg-gradient-to-r from-[#4c1123] to-[#6d1931]'>
        <div className='flex justify-between  h-[5vh] bg-[#000] m-5 rounded-md'>
          <div className='mx-5 flex  gap-1'>
            <div className='flex items-center gap-1 '>
              <div>
                <Camera
                  style={{
                    height: '20px',
                    width: '20px',
                    fill: 'white',
                    color: '#000',
                  }}
                />{' '}
              </div>
              <div>
                <p className='text-white'>0</p>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              <div>
                <MessageCircle
                  style={{
                    height: '20px',
                    width: '20px',
                    fill: 'white',
                    color: '#000',
                  }}
                />{' '}
              </div>
              <div>
                <p className='text-white'>0</p>
              </div>
            </div>
          </div>
          <div className='flex gap-1 mr-5 items-center'>
            <div>
              <Lock
                style={{
                  height: '15px',
                  width: '15px',
                  color: '#000',
                  fill: '#f1f1f1',
                }}
              />
            </div>
            <div className='flex'>
              <p className='text-[#f1f1f1] font-semibold text-[13px]'>
                Make Character Public
              </p>
            </div>
            <div>
              <Share2
                style={{
                  height: '15px',
                  width: '15px',
                  color: '#fff',
                  fill: '#f1f1f1',
                }}
              />
            </div>
          </div>
        </div>
        <div className='h-[30vh] text-white px-5 py-2 bg-black mx-5 rounded-md'>
          <div className='flex gap-10'>
            <div className='flex flex-col   '>
              <div>
                <p className='font-bold flex text-[14px]'>Who I Am</p>
              </div>
              <div className='mt-1'>
                <div>
                  <p className='font-bold text-[12px]'>Personality</p>
                </div>
                <div>
                  <p className=' text-[12px]'>Caregiver</p>
                </div>
              </div>
              <div className='mt-1'>
                <div>
                  <p className='font-bold text-[12px]'>Work</p>
                </div>
                <div>
                  <p className=' text-[12px]'>Yoga Instructor</p>
                </div>
              </div>
              <div className='mt-1'>
                <div>
                  <p className='font-bold text-[12px]'>Hobbies</p>
                </div>
                <div>
                  <p className=' text-[12px]'>Anime Fan</p>
                </div>
              </div>
              <div className='mt-1'>
                <div>
                  <p className='font-bold text-[12px]'>Relationship</p>
                </div>
                <div>
                  <p className=' text-[12px]'>Friend</p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex  items-center justify-between'>
                <div>
                  <p className='font-bold text-[14px] '>About Me</p>
                </div>
                <div>
                  <SquarePen
                    style={{
                      height: '15px',
                      width: '15px',
                      color: '#fff',
                      stroke: '#fff',
                    }}
                  />
                </div>
              </div>
              <div>
                <p className='mt-1 text-[12px]'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
