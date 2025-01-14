import React from "react";
import { Link } from 'react-router-dom';

function QueueNav() {

    
    return (
        
        <div className="queue-nav">
            {/* <Link to="/favorites" className="orange-button link-text bold-text queue-link">My That-Movie list</Link> */}
            <Link to="/queue" className="orange-button link-text bold-text queue-link">The Queue</Link>
            <Link to="/shelf" className="orange-button link-text bold-text queue-link">The Shelf</Link>
            <Link to="/get" className="orange-button link-text bold-text queue-link">The GTH</Link>
            <Link to="/kick" className="orange-button link-text bold-text queue-link">The Kick</Link>
        </div>
    )
}

export default QueueNav