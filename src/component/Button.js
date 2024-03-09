import React from 'react'
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
const Button = () => {
  return (
	<div>
		<div className='btn'>
		<button>
			<MdMessage/>  VIA SUPPORT CHAT
		</button>

		<button>
          <MdCall/>  VIA CALL
		</button>
		</div>

		<button className='email-btn'>
			<MdMessage/> VIA EMAIL FORM
		</button>
	</div>
  )
}

export default Button