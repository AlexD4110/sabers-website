// src/components/PricingAndDiscounts.jsx
import React from 'react';
import { ListGroup } from 'react-bootstrap';

const PricingAndDiscounts = () => {
  return (
    <>
      <h4 className="mb-3">Pricing &amp; Discounts</h4>
      <ListGroup className="mb-3">
        <ListGroup.Item>
          <strong>Up to 3 participants:</strong> $500 each (no discounts applicable)
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>4th, 5th, and 6th participants:</strong> $750 each <em>(before any discount)</em>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>7th, 8th, 9th, and above participants:</strong> $1,000 each <em>(before any discount)</em>
        </ListGroup.Item>
      </ListGroup>

      <h5 className="mt-4">Early Bird / Additional Discounts</h5>
      <p>
        Any discounted rate will be calculated based on the original amounts listed 
        above. If you take advantage of our early bird or other promotional discounts, 
        the reduction applies to the corresponding pre-discount rate (i.e., $500, $750, or $1,000).
      </p>
      <p>
        If you have any questions or need further clarification, please let us know. 
        We look forward to welcoming you to the program!
      </p>
    </>
  );
};

export default PricingAndDiscounts;
