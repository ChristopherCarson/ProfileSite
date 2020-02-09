import React from 'react';

const Contact = ({ data }) => {
   const [name, setName] = React.useState('')
   const [email, setEmail] = React.useState('')
   const [message, setMessage] = React.useState('')
   const [show, setShow] = React.useState(false)
   const [modalMessage, setModalMessage] = React.useState(false)

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const handleSubmit = (event) => {
      event.preventDefault()
      //const templateId = 'template_lCLMKCYL';

      setModalMessage('Testing Modal Message')
      handleShow()
      
      /** 

	   window.emailjs.send(
      "default_service", templateId, {
        "reply_to": email,
        "from_name": name,
        "message_html": message
      }).then(() => {
         handleShow()
      })
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      */
  }

    if(!data) return <section id="contact"/>

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{data.contactmessage}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={e => setName(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={e => setEmail(e.target.value)}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={e => setMessage(e.target.value)}/>
                  </div>

                  <div>
                     <button className="submit" onClick={e => handleSubmit(e)}>Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>

            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {data.name}<br />
						   {data.address.street} <br />
						   {data.address.city}, {data.address.state} {data.address.zip}<br />
						   <span>{data.phone}</span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }

export default Contact;
