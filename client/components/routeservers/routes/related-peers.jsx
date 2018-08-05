
import React from 'react'

import {Link} from 'react-router'

import {makePeerLinkProps} from './urls'

/*
 * Render related peers as tabs
 */
export default function RelatedPeers(props) {

  const peers = props.peers.map((p) => (
    <li key={p.id} 
        className={props.protocolId === p.id ? "active" : ""} >
      <Link to={makePeerLinkProps(props.routeserverId, p.id)}>
        {p.address}
      </Link>
    </li>
  ));
  
  return (
    <ul className="related-peers">
      {peers}
    </ul>
  );

}


