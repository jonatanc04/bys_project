import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../assets/styles/TeamPage.css';
import { useTranslation } from 'react-i18next';
import discord from '../assets/images/comunicacion.png';
import twitter from '../assets/images/x-logo.png';

export default function TeamPage({ teamData }) {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const teamsArray = Object.entries(teamData);
  const [teamName, team] = teamsArray.find(([key, value]) => value.id === parseInt(id)) || [];

  if (!team) {
    return (
      <div className="teampage fade-in container d-flex flex-column justify-content-center align-items-center">
        <h2 className="notfound p-3">{t('notfoundteam')}</h2>
        <button onClick={() => navigate(-1)} className="p-2">{t('back')}</button>
      </div>
    );
  }

  return (
    <div className="teampage fade-in container d-flex flex-wrap justify-content-center align-items-center">
      <h1 className="col-12 p-3 m-3 text-center">{teamName}</h1>
      <div className="content col-6 d-flex justify-content-center align-items-center">
        <img src={process.env.PUBLIC_URL + team.img} alt={`${teamName} Logo`} />
      </div>
      <div className="content col-6 d-flex flex-column justify-content-center align-items-center">
        <div className="col-8 col-lg-6">
          <h3>{t('manager')}</h3>
          <div className="col-12 d-flex flex-row justify-content-between">
            <h5><i>{team.manager}</i></h5>
            <img className="logo" src={discord} alt="discord" />
          </div>
        </div>
        <div className="col-8 col-lg-6">
          <h3>{t('x-profile')}</h3>
          <div className="col-12 d-flex flex-row justify-content-between">
            { team.twitter === "https://x.com" ? (
              <h5 className="col-12 text-center">{t('nothing')}</h5>
            ) : (
              <>
              <h5><i>{team.twitter.arr}</i></h5>
              <a href={team.twitter.url}><img className="logo inverted" src={twitter} alt="twitter" /></a>
              </>
            )}
          </div>
        </div>
        <a className="opgg-link m-3 p-2" href={team.opgg} target="_blank" rel="noopener noreferrer">
          {t('seein')} <b>OP.GG</b>
        </a>
      </div>
      <div className="col-12 p-4 d-flex justify-content-center align-items-center">
        <button onClick={() => navigate(-1)} className="p-2">{t('back')}</button>
      </div>
    </div>
  );
}
