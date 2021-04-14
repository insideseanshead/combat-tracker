import React, { useState, useEffect } from "react";
import CampaignThumbnails from "../components/CampaignThumbnails";
import AddCampaignForm from "../components/ui/AddCampaignForm";
import API from "../components/utils/API";

const Campaigns = (props) => {
  // SET CAMPAIGN STATE
  const [campaigns, setCampaigns] = useState({
    name: '',
    userId: props.profile.id
  });

  const handleInputChange = (event) => {
    setCampaigns({
      name: event.target.value,
    });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.createCampaign(props.profile.token, campaigns).then((data) => {
      setCampaigns({
        name: "",
      });
      props.fetchData();
    })
  }

  // useEffect(() => {
  //   API.getAllCampaigns().then((campaignData) => {
  //     setCampaigns(campaignData);
  //   });
  // }, []);

  return (
    <div>
      <AddCampaignForm
        profile={props.profile}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        campaignName = {campaigns.name} />
      {/* <div className="CampaignsWrapper">
        {campaigns.map((campaignObj) => (
          <CampaignThumbnails
            key={campaignObj.id}
            id={campaignObj.id}
            name={campaignObj.name}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Campaigns;
