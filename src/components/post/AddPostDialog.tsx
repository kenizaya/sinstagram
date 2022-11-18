import React, { useState } from 'react'
import Modal from 'react-modal'
import { MdClose } from 'react-icons/md'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import serialize from '../../utils/serialize'
import { useUserContext } from '../../contexts/userContext'
import handleImageUpload from '../../utils/handleImageUpload'

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
]

const AddPostDialog = ({ media, handleClose }) => {
  const [editor] = useState(() => withReact(createEditor()))
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [value, setValue] = useState(initialValue)
  const { currentUser } = useUserContext()

  const customStyles = {
    overlay: {
      position: 'fixed',
      zIndex: '20',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: 935,
      width: '100%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      margin: 0,
      padding: 0,
      overflow: 'none',
      WebkitOverflowScrolling: 'touch',
    },
  }

  const handleSharePost = async () => {
    setIsSubmitting(true)
    // const url = await handleImageUpload(media)
    console.log(value)
  }

  return (
    <>
      <Modal
        isOpen
        ariaHideApp={false}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <div className='w-full'>
          <div className='border-b-2 flex items-center justify-between p-5'>
            <h3 className='font-semibold w-full text-center'>New Post</h3>
            <span
              className='absolute top-0 right-0 cursor-pointer z-30 p-5'
              onClick={handleClose}
            >
              <MdClose size={25} />
            </span>
          </div>
          <div className='w-full flex justify-center my-5'>
            <img
              src={URL.createObjectURL(media)}
              className='w-[500px] h-[500px] object-contain'
            />
          </div>
          <div className='flex items-center p-7 gap-5'>
            <div className='avatar'>
              <div className='w-16 rounded-full'>
                <img src={currentUser.profileImage} />
              </div>
            </div>

            <div className='flex-1'>
              <Slate
                editor={editor}
                value={initialValue}
                onChange={() => setValue(value)}
              >
                <Editable placeholder='Write your caption...' />
              </Slate>
            </div>
            <button
              type='button'
              className='text-primary font-semibold cursor-pointer'
              disabled={isSubmitting}
              onClick={handleSharePost}
            >
              Share
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default AddPostDialog
