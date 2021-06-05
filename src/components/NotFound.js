import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div class="container">
    <div class="row text-center">
        <div class="col-md-12">
            <div class="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div class="error-actions">
                    <Link to="/Login" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-envelope"></span> Take me home! </Link>
                </div>
            </div>
        </div>
    </div>
</div>

);

export default NotFound
