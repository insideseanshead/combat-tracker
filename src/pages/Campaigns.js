import React, { useState, useEffect } from "react";
import CampaignThumbnails from "../components/CampaignThumbnails";
import AddCampaignForm from "../components/ui/AddCampaignForm";
import API from "../components/utils/API";

const Campaigns = () => {
  // SET CAMPAIGN STATE
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    API.getAllCampaigns().then((campaignData) => {
      setCampaigns(campaignData);
    });
  }, []);

  return (
    <div>
      <AddCampaignForm />
      <div className="CampaignsWrapper">
        {campaigns.map((campaignObj) => (
          <CampaignThumbnails
            key={campaignObj.id}
            id={campaignObj.id}
            name={campaignObj.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
