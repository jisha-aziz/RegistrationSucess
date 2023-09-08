// SuccessPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <div>
      <Link to="/signup">
      <h1>Registration Successful!</h1>
      </Link>
      <p>Your registration has been completed successfully.</p>
    </div>
  );
}

export default SuccessPage;
