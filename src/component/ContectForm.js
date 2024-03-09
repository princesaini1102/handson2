import React from 'react'

const ContactForm = () => {
  return (
	<div className='container'>
			<form action="#">
		<div className='form'>
				
				<label htmlFor="name" className='name-label'>Name</label>
				<input type="text" name="Name"  className='input-btn1'/>
				<br/>
				
				<label htmlFor="email" className='email-label'>E-mail</label>
				<input type="text" name="email"   className='input-btn2'/>
				<br/>
				<label htmlFor="text" className='text-label'>Text</label>
				<textarea name="Text" id="text" className='input-btn3' cols="30" rows="10"></textarea>
				{/* <input type="text" name="Text" className='input-btn3'/> */}

				<button className='submit-btn'>SUBMIT</button>
		</div>
			</form>
		<div className='contact-logo'>
			<img src="/images/main.png" alt="main-logo" />
		</div>
	</div>
  )
}

export default ContactForm