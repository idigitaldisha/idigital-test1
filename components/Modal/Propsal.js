
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm, ValidationError } from '@formspree/react';   


const Proposal = ({show,handleClose}) => {

    const [state, handleSubmit] = useForm("xbjeyabz");

    return (
        <>
            <Modal className='modal-contact' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                {state.succeeded? <>  <p className="mt-40 text-center text-2xl text-orange-500">Thanks for Contacting us!</p>
      <div className="flex justify-center my-4">
      <img className="" src="https://img.icons8.com/emoji/256/folded-hands-light-skin-tone.png" width={100}/>
      </div>
      <p className="text-center">Our agent will contact you soon</p>
   </> : <section class="contact_us mt-32">
       <div class="container">
           <div class="row">
               <div class="col-md-12">
                   <div class="contact_inner">
                       <div class="row">
                           <div class="col-md-10">
                               <div class="contact_form_inner">
                                   <div class="contact_field">
                                       <h3>Contatc Us</h3>
                                       <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                       <form onSubmit={handleSubmit}>
                                       <input type="text" class="form-control form-group"  id="name" name="name" placeholder="Name" />
                                       <input type="email" class="form-control form-group" id="email" name="email" placeholder="Email" />
                                       <input type="number" class="form-control form-group" id="phone" name="phone" placeholder="Phone Number" />
                                       <textarea class="form-control form-group" id="message" name="message" placeholder="Message"></textarea>
                                       <button class="contact_form_submit" type="submit" disabled={state.submitting}> Send</button>
                                       </form>
                                   </div>
                               </div>
                           </div>
                           <div class="col-md-2">
                               <div class="right_conatct_social_icon d-flex align-items-end">
                                  <div class="socil_item_inner d-flex">
                                     <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                                     <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                     <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                  </div>
                               </div>
                           </div>
                       </div>
                       <div class="contact_info_sec">
                           <h4>Contact Info</h4>
                           <div class="d-flex info_single align-items-center">
                               <i class="fas fa-headset"></i>
                               <span>+91- 9971322654</span>
                           </div>
                           <div class="d-flex info_single align-items-center">
                               <i class="fas fa-envelope-open-text"></i>
                               <span>info@idigitaldisha.com</span>
                           </div>
                           <div class="d-flex info_single align-items-center">
                               <i class="fas fa-map-marked-alt"></i>
                               <span>If you're looking for a digital marketing agency that delivers results and helps you grow your business, then iDigital Disha is the perfect partner for you. </span>
                           </div>
           
                       </div>
                   </div>
               </div>
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
