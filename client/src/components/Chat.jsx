import { Send } from 'lucide-react'
import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Switch from 'react-switch'

const Chat = () => {
  const [textMessage, setTextMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [isText, setIsText] = useState(false)

  const sendMessage = async () => {
    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gryphe/mythomist-7b:free',
          messages: [{ role: 'user', content: textMessage }],
        }),
      },
    )

    const data = await response.json()
    const receivedMessage = data.choices[0].message.content

    const newMessage = {
      sender: 'user',
      message: textMessage,
    }

    const assistantMessage = {
      sender: 'assistant',
      message: receivedMessage,
    }

    // setMessage sets the messages state with the user's message first
    setMessages(prevMessages => [...prevMessages, newMessage])

    if (assistantMessage.message) {
      fetch('http://localhost:4000/messages/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: textMessage,
          receiver: assistantMessage.message,
        }),
      })
    }

    setMessages(prevMessages => [...prevMessages, assistantMessage])
    setTextMessage('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    sendMessage()
  }

  const handleSwitchChange = checked => {
    setIsText(checked)
  }
  return (
    <div className='flex flex-col justify-between px-10 min-h-[90vh] bg-[#000] p-5'>
      <div className='flex flex-col gap-2'>
        {/* Render the messages from the messages array */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.sender === 'user'
                ? 'flex flex-col gap-2 items-end'
                : 'flex flex-col gap-2 items-start'
            } `}
          >
            {message.sender === 'user' ? (
              <div className='flex gap-2 mb-1 items-center'>
                <div className=''>
                  <p className='text-[#504f4f]'>Cutie</p>
                </div>
                <div>
                  <img
                    src='/ai-girl.jpg'
                    className='h-[50px] w-[50px] rounded-full'
                  />
                </div>
              </div>
            ) : (
              <div className='flex gap-2 items-center'>
                <div>
                  <img
                    src='/ai-panda.jpg'
                    className='h-[50px] w-[50px] rounded-full'
                  />
                </div>
                <div className=''>
                  <p className='text-[#504f4f]'>Jessica</p>
                </div>
              </div>
            )}

            {message.sender === 'assistant' ? (
              <span
                style={{
                  color: 'white',
                  backgroundColor: '#d6295e',
                  marginLeft: '10px',
                  borderRadius: '12px',
                  padding: '10px',
                }}
              >
                <Typewriter
                  words={[message.message]}
                  typewriter={
                    <span style={{ color: 'white', fontFamily: 'monospace' }} />
                  }
                />
              </span>
            ) : (
              <p className='bg-[#252526] max-h-[30px] px-2 py-1 rounded-md text-[#fff]'>
                {message.message}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className='flex flex-col '>
        <div className='flex  justify-end items-center mb-1 w-[60vw]'>
          <p className='text-[#D32D5E] mr-1'>text</p>
          <Switch
            checked={isText}
            onChange={handleSwitchChange}
            onColor='#D32D5E'
            onHandleColor='#D32D5E'
            offColor='#252525'
            offHandleColor='#D32D5E'
            handleDiameter={10}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
            activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
            height={10}
            width={38}
            className='react-switch'
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className='flex justify-center items-center  gap-3'
        >
          <div>
            <input
              type='text'
              placeholder='Type a Message here'
              className='w-[50vw] h-[6vh] border-4 bg-black p-1 text-white border-[#7d1110] rounded-lg'
              value={textMessage}
              onChange={e => setTextMessage(e.target.value)}
            />
          </div>
          <div>
            <button type='submit'>
              <Send
                color='#000'
                style={{
                  backgroundColor: '#4a4c4b',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px',
                  padding: '5px',
                  stroke: '#fff',
                  fill: '#fff',
                }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Chat
