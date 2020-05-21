import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from 'react-modal';
import { Entity } from 'resium';
import { Cartesian3, Color } from 'cesium';

const Contact = ({
    load,
    nav,
    data,
}) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [show, setShow] = React.useState(false);
    const [spinner, setSpinner] = React.useState(false);
    const [modalMessage, setModalMessage] = React.useState(
        `Your message was successfully sent.`
    );
    const [error, setError] = React.useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'black',
            textAlign: 'center',
            radius: 100
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const clearForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleSubmit = event => {
        event.preventDefault();
        const templateId = 'template_lCLMKCYL';
        setSpinner(true);

        window.emailjs
            .send('default_service', templateId, {
                reply_to: email,
                from_name: name,
                message_html: message
            })
            .then(() => {
                setSpinner(false);
                handleShow();
                clearForm();
            })
            .catch(() => {
                setModalMessage(
                    'Something went wrong! Please contact me at ChrisCarson81@gmail.com.'
                );
                setSpinner(false);
                handleShow();
            });
    };

    return (
        <ReactCSSTransitionGroup
            transitionName="slide"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
        >
            {nav === 'contact' && (
                <Entity
                    position={Cartesian3.fromDegrees(-120, 38)}
                    point={{ pixelSize: 15, color: Color.BLUE }}
                ></Entity>
            )}
            {nav === 'contact' && load && (
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, .5)',
                        color: 'white',
                        borderColor: 'rgba(255, 255, 255, .7)',
                        borderWidth: 3,
                        borderStyle: 'solid',
                        position: 'absolute',
                        left: '15%',
                        top: '10%',
                        height: '90%',
                        width: '70%',
                        borderRadius: 30,
                        padding: 20,
                        overflowX: 'hidden'
                    }}
                >
                    <div>
                        <Modal
                            ariaHideApp={false}
                            isOpen={show}
                            onAfterOpen={() => { }}
                            onRequestClose={() => handleClose()}
                            style={customStyles}
                            contentLabel="Contact Form Results"
                        >
                            <h2 style={{ color: 'white' }}>{modalMessage}</h2>
                            <h2 style={{ color: 'white' }}>Thank you!</h2>
                            <hr />
                            <button
                                style={{ background: '#474747' }}
                                onClick={() => handleClose()}
                            >
                                Close
                        </button>
                        </Modal>

                        <div className="row section-head">
                            <div className="ten columns">
                                <p className="lead">{data.contactmessage}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="eight columns">
                                <div>
                                    <label htmlFor="contactName">
                                        <span className="required">Name</span>
                                    </label>
                                    <input
                                        value={name}
                                        type="text"
                                        size="35"
                                        id="contactName"
                                        name="contactName"
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactEmail">
                                        <span className="required">Email</span>
                                    </label>
                                    <input
                                        value={email}
                                        type="text"
                                        size="35"
                                        id="contactEmail"
                                        name="contactEmail"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactMessage">
                                        <span className="required">Message</span>
                                    </label>
                                    <textarea
                                        value={message}
                                        cols="50"
                                        id="contactMessage"
                                        name="contactMessage"
                                        onChange={e => setMessage(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <h3 style={{ color: 'white' }} hidden={!error || (error && name !== '')}>
                                        Name is a required field.
                                </h3>
                                    <h3 style={{ color: 'white' }} hidden={!error || (error && email !== '')}>
                                        Email is a required field.
                                </h3>
                                    <h3 style={{ color: 'white' }}
                                        hidden={!error || (error && message !== '')}
                                    >
                                        Message is a required field.
                                </h3>
                                    <button
                                        className="submit"
                                        onClick={e => {
                                            if (
                                                name === '' ||
                                                email === '' ||
                                                message === ''
                                            ) {
                                                setError(true);
                                            } else {
                                                setError(false);
                                                setSpinner(true);
                                                handleSubmit(e);
                                            }
                                        }}
                                    >
                                        Submit
                                </button>
                                    <span
                                        id={
                                            spinner
                                                ? 'image-loader-show'
                                                : 'image-loader'
                                        }
                                    >
                                        <img alt="" src="images/loader.gif" />
                                    </span>
                                </div>
                            </div>

                            <aside className="four columns footer-widgets">
                                <div className="widget widget_contact">
                                    <h4 className="addressHeader">Address and Phone</h4>
                                    <p className="address">
                                        {data.name}
                                        <br />
                                        {data.address.street} <br />
                                        {data.address.city}, {data.address.state}{' '}
                                        {data.address.zip}
                                        <br />
                                        <span>{data.phone}</span>
                                    </p>
                                </div>
                            </aside>
                        </div>

                    </div>
                </div>
            )
            }

        </ReactCSSTransitionGroup >
    );
};

export default Contact;
