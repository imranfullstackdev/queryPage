import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';

const QueryPage = () => {
  const formDataArray = useSelector((state) => state.form);

  return (
    <section id="/query">
      <Container>
        <h2 className="text-center my-4">Query</h2>
        {formDataArray.length === 0 ? (
          <p className="text-center"><b>No query to display</b></p>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {formDataArray.map((formData, index) => (
              <Col key={index}>
                <Card>
                  <Card.Img src={formData.image} alt="Uploaded Image" />
                  <Card.Body>
                    <Card.Title>Form Submission {index + 1}</Card.Title>
                    <Card.Text>
                      <strong>Name:</strong> {formData.name}
                    </Card.Text>
                    <Card.Text>
                      <strong>Query:</strong> {formData.query}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default QueryPage;
