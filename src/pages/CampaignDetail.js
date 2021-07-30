import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddCharacterForm from "../components/ui/AddCharacterForm";
import AddEncounterForm from "../components/ui/AddEncounterForm";
import CharacterCard from "../components/ui/CharacterCard";
import API from "../components/utils/API";

const CampaignDetail = (props) => {
  const [campaign, setCampaign] = useState({
    name: "",
    userId: "",
    encounter: [],
    character: [],
  });

  const [characterFormState, setCharacterFormState] = useState({
    name: "",
    player: "",
    weaponSkill: "",
    ballisticSkill: "",
    strength: "",
    toughness: "",
    agility: "",
    intellegence: "",
    willpower: "",
    fellowship: "",
    attacks: "",
    wounds: "",
    strengthBonus: "",
    toughnessBonus: "",
    movement: "",
    magic: "",
    insanityPoints: "",
    fatePoints: "",
  });

  //TODO: set cncounter form state

  const { id } = useParams();

  useEffect(() => {
    API.getOneCampaign(id).then((campaignData) => {
      if (campaignData) {
        setCampaign({
          name: campaignData.name,
          character: campaignData.Characters,
          userId: campaignData.userId,
        });
      }
    });
  }, []);

  const handleCharacterInputChange = (event) => {
    const { name, value } = event.target;
    setCharacterFormState({
      ...characterFormState,
      [name]: value,
    });
  };

  const handleCharacterFormSubmit = (e) => {
    e.preventDefault();
    API.createCharacter(props.profile.token, {
      ...characterFormState,
      campaignId: id,
    }).then((data) => {
      API.getOneCampaign(id).then((campaignData) => {
        if (campaignData) {
          setCampaign({
            name: campaignData.name,
            character: campaignData.Characters,
            userId: campaignData.userId,
          });
        }
      });
      setCharacterFormState({
        name: "",
        player: "",
        weaponSkill: "",
        ballisticSkill: "",
        strength: "",
        toughness: "",
        agility: "",
        intellegence: "",
        willpower: "",
        fellowship: "",
        attacks: "",
        wounds: "",
        strengthBonus: "",
        toughnessBonus: "",
        movement: "",
        magic: "",
        insanityPoints: "",
        fatePoints: "",
      });
    });
  };

  return (
    <div className="CampaignDetail">
      <h1>{campaign.name}</h1>
      {/* <AddCharacterForm
        handleCharacterInputChange={handleCharacterInputChange}
        handleCharacterFormSubmit={handleCharacterFormSubmit}
        characterFormState={characterFormState}
      /> */}
      {/* <AddEncounterForm /> */}
      <div className="CharacterDetail">
        {/* {campaign.character.map((characterObj) =><CharacterCard name={characterObj.name} ></CharacterCard>)} */}
      </div>
    </div>
  );
};

export default CampaignDetail;
