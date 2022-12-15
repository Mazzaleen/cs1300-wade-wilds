import { FC } from "react";

import { LinkButton } from "./LinkButton";
import styles from "./projectCard.module.scss";
// import { useModal } from './useModal';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  GitHub: string;
  hosted: string;
  // tools1: string;
  // tools2: string;
  // tools3: string;
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  // const { isShown, toggle } = useModal();
  
  // const onConfirm = () => toggle();
  // const onCancel = () => toggle();
  return (
    <div className={styles.projectCard}>
      <div className={styles.imagewrapper}>
        <img  src={props.image} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className={styles.buttons}>
          {props.GitHub && <LinkButton isGitHub={true} link={props.GitHub} />}
          <LinkButton isGitHub={false} link={props.hosted} />
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
