import React from "react";
import { Link } from 'react-router-dom';

function QueueNav() {

    
    return (
        <div className="queue-nav">
            <Link to="/favorites" className="orange-button link-text bold-text queue-link">My That-Movie list</Link>
            <Link to="/queue" className="orange-button link-text bold-text queue-link">My Queue</Link>
            <Link to="/shelf" className="orange-button link-text bold-text queue-link">My Shelf</Link>
        </div>
    )
}

export default QueueNav