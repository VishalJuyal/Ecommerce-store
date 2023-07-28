import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="mb-4">
        <h2 className="py-4 fw-bold">About Us</h2>
        <p>
          Welcome to our e-commerce store! We are a team of passionate
          individuals committed to providing high-quality products to our valued
          customers. Our goal is to make your online shopping experience smooth,
          enjoyable, and convenient.
        </p>
        <p>
          At our store, you'll find a wide range of products, including
          electronics, fashion, home essentials, and much more. We source our
          products from trusted suppliers to ensure they meet the highest
          standards of quality and reliability.
        </p>
        <p>
          Customer satisfaction is our top priority. If you have any questions,
          concerns, or feedback, please don't hesitate to get in touch with our
          support team. We are here to assist you and provide the best possible
          service.
        </p>
      </div>
      <div className="fixed-bottom bg-light p-3 text-center">
        <p>
          For any inquiries or assistance, please contact us at:
          <br />
          Email: support@example.com
          <br />
          Contact Number: +1 (123) 456-7890
        </p>
      </div>
    </div>
  );
};

export default About;
