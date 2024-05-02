import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setFormData } from '../store/formSlice';

const ContactUs = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = (data) => {
    dispatch(setFormData({ ...data, image: imagePreview }));
    reset();
    setImagePreview(null); 
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="contact-us" style={{ background: '#f9f9f9', padding: '50px 0' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 style={{ color: '#333', marginBottom: '30px', textAlign: 'center' }}>Contact Us</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  {...register('name', { required: 'Name is required' })}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  style={{ marginBottom: '15px' }}
                />
                {errors.name && <span className="invalid-feedback">{errors.name.message}</span>}
              </Form.Group>
              <Form.Group controlId="formQuery">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your query"
                  {...register('query', { required: 'Query is required' })}
                  className={`form-control ${errors.query ? 'is-invalid' : ''}`}
                  style={{ marginBottom: '15px' }}
                />
                {errors.query && <span className="invalid-feedback">{errors.query.message}</span>}
              </Form.Group>
              <Form.Group controlId="formImage">
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ marginBottom: '15px' }}
                />
              </Form.Group>
              <Button variant="primary" type="submit" style={{ width: '100%' }}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} className="mb-4 mb-md-0" style={{ textAlign: 'center' }}>
            <img
              src="https://media.istockphoto.com/id/1412621642/vector/customer-feedback-user-experience-or-client-satisfaction-opinion-for-product-and-services.jpg?s=612x612&w=0&k=20&c=5FJpkXmxYj3S6dhEn65cab_v876zSHmVT-0Ba-SH97k="
              alt="Contact Us"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactUs;
