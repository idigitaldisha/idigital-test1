
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm, ValidationError } from '@formspree/react';
import audit from "../../public/assets/images/audit.jpg";
import Image from 'next/image';

const Proposal = ({ show, handleClose }) => {

    const [state, handleSubmit] = useForm("xbjeyabz");

    return (
        <>
            <Modal className='modal-contact' show={show} onHide={handleClose}>
               
                <Modal.Body>
                    {state.succeeded ? <>  <p className="mt-10 text-center text-2xl text-orange-500">Thanks for Contacting us!</p>
                        <div className="flex justify-center my-4">
                            <img className="" src="https://img.icons8.com/emoji/256/folded-hands-light-skin-tone.png" width={100} />
                        </div>
                        <p className="text-center">Our agent will contact you soon</p>
                    </> : <section class="contact_us ">
                  <div className='grid grid-cols-2'>
                  <div class="contact_form_inner">
                                                    <div class="contact_field">
                                                        <h3>Website Audit</h3>
                                                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                                        <form onSubmit={handleSubmit}>
                                                            <input type="text" class="form-control form-group" id="name" name="name" placeholder="Name" />
                                                            <input type="email" class="form-control form-group" id="email" name="email" placeholder="Email" />
                                                            <input type="number" class="form-control form-group" id="phone" name="phone" placeholder="Phone Number" />
                                                            <input type="text" class="form-control form-group" id="url" name="url" placeholder="Website URL" />
                                                            <textarea class="form-control form-group" id="message" name="message" placeholder="Message"></textarea>
                                                            <button class="contact_form_submit" type="submit" disabled={state.submitting}> Send</button>
                                                        </form>
                                                    </div>
                                                </div>

                                                <div>
                                                    <Image src={audit}/>
                                                </div>
                  </div>
                    </section>
                    }
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}
export default Proposal;
