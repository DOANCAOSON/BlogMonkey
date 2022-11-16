import React from 'react'

const Button = ({ children, linearGradient, login, banner }) => {
  return (
    <button
      className={`${
        login ? 'w-[343px] cursor-pointer h-[80px] text-[24px] ' : 'w-[191px]'
      }  rounded-lg text-md font-semibold text-white p-2 ${
        linearGradient ? 'bg-gradient-to-br from-[#00B4AA] to-[#bbf63b]' : 'bg-[#00B4AA]'
      } ${banner ? 'bg-white text-[#23BB86] h-[59px]' : ''}`}
    >
      {children}
    </button>
  )
}

export default Button
