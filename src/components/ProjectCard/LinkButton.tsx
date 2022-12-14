import { FC } from 'react';
import { FaBook, FaCompass, FaGithub, FaRunning } from 'react-icons/fa';

import styles from './projectCard.module.scss';

interface LinkButtonProps {
  isGitHub: boolean;
  link: string;
}

const LinkButton: FC<LinkButtonProps> = (props) => {
  return (
    <a
      className={props.isGitHub ? `${styles.github}` : `${styles.hosted}`}
      href={props.link}
      target='_blank'
      rel='noreferrer'
    >
      {props.isGitHub ? <FaGithub /> : <FaBook />}
      {props.isGitHub ? ' Code' : ' Learn More'}
    </a>
  );
};

export { LinkButton };
