import React from 'react';
import css from './ChatBlock.module.scss';
// Needed to get id/category/extension of url
import { useParams } from 'react-router-dom';

export const ChatBlock = props => {
  const { userImage, username, timestamp, message } = props;

  const { channelsId } = useParams();

  return (
    <div className={css.chatBlock}>
      # {channelsId}
    </div>
  )
}