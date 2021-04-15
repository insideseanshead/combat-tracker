import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const CampaignThumbnails = (props) => {
  return (
    <div className="CampaignThumbnail">
      <h3>{props.name}</h3>
      <Link to={`/campaigns/${props.id}`}>
        <Button variant="success" size="sm">
          View
        </Button>
      </Link>{" "}
      <Button variant="danger" size="sm" onClick={()}>
        Delete
      </Button>
    </div>
  );
};

export default CampaignThumbnails;
