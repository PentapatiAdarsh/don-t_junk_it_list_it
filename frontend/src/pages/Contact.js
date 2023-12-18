import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {AiOutlineHome,AiOutlineMail} from "react-icons/ai";
import {BiPhoneCall,BiInfoCircle} from "react-icons/bi";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { createQuery } from "../features/contact/contactSlice";

const contactSchema = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup.string().email("Email Should be valid").required("Email Address is required"),
  mobile: yup.string().default("").nullable().required("Mobile Number is required"),
  comment: yup.string().default("").nullable().required("Comment is required"),
  
});



const Contact = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      name:"",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
     dispatch(createQuery(values))
    },
  });
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9387.072937584136!2d-71.821956!3d42.2511866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4424d2e55e1e5%3A0xd8ea13b6bbd88a4c!2sClark%20University!5e0!3m2!1sen!2sus!4v1688972504599!5m2!1sen!2sus"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        onChange={formik.handleChange("name")}
                        onBlur={formik.handleBlur("name")}
                        values={formik.values.name}
                      />
                      <div className="error">
                        {
                          formik.touched.name && formik.errors.name
                        }
                      </div>
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                        values={formik.values.email}
                      />
                      <div className="error">
                        {
                          formik.touched.email && formik.errors.email
                        }
                      </div>
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                        name="mobile"
                        onChange={formik.handleChange("mobile")}
                        onBlur={formik.handleBlur("mobile")}
                        values={formik.values.mobile}
                      />
                      <div className="error">
                        {
                          formik.touched.mobile && formik.errors.mobile
                        }
                      </div>
                    </div>
                    <div>
                      <textarea
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                        name="comment"
                        onChange={formik.handleChange("comment")}
                        onBlur={formik.handleBlur("comment")}
                        values={formik.values.comment}
                      ></textarea>
                      <div className="error">
                        {
                          formik.touched.comment && formik.errors.comment
                        }
                      </div>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome  className="fs-5"/>
                        <address className="mb-0">
                         ADC Main Street Level 3
                         Bostan, MA</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall  className="fs-5"/>
                        <a href="tel:+1 7816551347 ">(+1) 7816551347</a>
                        </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5"/>
                        <a href="mailto:adarshp@adc.co.in">adarshp@adc.co.in</a>
                        </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle  className="fs-5"/>
                        <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
    </>
  );
};

export default Contact;
