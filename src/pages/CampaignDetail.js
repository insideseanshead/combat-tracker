import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import AddEncounterForm from '../components/ui/AddEncounterForm';
import API from "../components/utils/API"

const CampaignDetail = () => {
    const [campaign, setCampaign] = useState({
        name:"",
        userId:"",
        encounters: []
    });

    //TODO: set cncounter form state

    const { id } = useParams();

    useEffect(() => {
        API.getOneCampaign(id).then((campaignData) => {
            if (campaignData) {
                setCampaign({
                    name: campaignData.name,
                    userId: campaignData.userId
                });
            }
        })
    }, []);
    return (
        <div className='CampaignDetail'>
            <h1>{campaign.name}</h1>
            <AddEncounterForm />
        </div>
    )
}

export default CampaignDetail
