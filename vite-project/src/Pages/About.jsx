import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const About = () => {
  const features = [
    {
      title: "Free Shipping",
      desc: "On all orders over $49.00",
      icon: "🚚",
    },
    {
      title: "15 Days Returns",
      desc: "Moneyback guarantee",
      icon: "💰",
    },
    {
      title: "Secure Checkout",
      desc: "Protected by Paypal",
      icon: "💳",
    },
    {
      title: "Offer & Gift",
      desc: "On all orders over",
      icon: "🎁",
    },
  ];

  const testimonials = [
    {
      name: "Kelian Anderson",
      role: "Our Client",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, pariatur.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "John Smith",
      role: "Customer",
      text: "Amazing products and fast delivery service. Highly recommended!",
      image: "https://via.placeholder.com/100",
    },
  ];

  const blogs = [
    {
      title: "Latest Flower Collection",
      date: "Nov 18, 2020",
      image: "https://via.placeholder.com/400x250",
    },
    {
      title: "Beautiful Decoration Ideas",
      date: "Nov 20, 2020",
      image: "https://via.placeholder.com/400x250",
    },
    {
      title: "Fresh Flowers Everyday",
      date: "Nov 25, 2020",
      image: "https://via.placeholder.com/400x250",
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-light py-5 text-center">
        <Container>
          <h1 className="fw-bold">About Us</h1>
          <p>
            Home / <span className="text-success">About Us</span>
          </p>
        </Container>
      </section>

      {/* Features */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {features.map((item, index) => (
              <Col lg={3} md={6} key={index}>
                <Card className="text-center border-0 shadow-sm h-100 p-4">
                  <div className="fs-1">{item.icon}</div>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <img
                src="https://via.placeholder.com/600x400"
                alt="about"
                className="img-fluid rounded"
              />
            </Col>

            <Col lg={6}>
              <h2 className="fw-bold mb-4">
                Fiama - Powerful Theme for Shop
              </h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, minima! Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>

              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>

              <Button variant="success">Read More</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Video Section */}
      <section className="py-5 bg-dark text-white text-center">
        <Container>
          <h2 className="mb-4">Watch Our Story</h2>

          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/J6oDTn_ENto"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Client Says</h2>

          <Row className="g-4">
            {testimonials.map((item, index) => (
              <Col md={6} key={index}>
                <Card className="shadow-sm border-0 p-4 text-center h-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-circle mx-auto mb-3"
                    width="100"
                    height="100"
                  />

                  <Card.Text>{item.text}</Card.Text>

                  <h5>{item.name}</h5>
                  <small className="text-muted">{item.role}</small>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Banner */}
      <section className="py-5">
        <Container>
          <img
            src="https://via.placeholder.com/1200x300"
            alt="banner"
            className="img-fluid rounded"
          />
        </Container>
      </section>

      {/* Blog Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Latest News</h2>

          <Row className="g-4">
            {blogs.map((item, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="border-0 shadow-sm h-100">
                  <Card.Img variant="top" src={item.image} />

                  <Card.Body>
                    <small className="text-muted">{item.date}</small>

                    <Card.Title className="mt-2">
                      {item.title}
                    </Card.Title>

                    <Button variant="outline-success" size="sm">
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;