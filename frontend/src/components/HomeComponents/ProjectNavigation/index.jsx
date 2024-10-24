import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownAZ, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

import styles from "./ProjectNavigation.module.css";
import { ProjNavContainer, ControlsContainer, Input } from "./styles";
const ProjectNavigation = () => {
  return (
    <ProjNavContainer>
      <Input>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Pesquise pelo nome..." />
      </Input>
      <ControlsContainer>
        <button>
          <FontAwesomeIcon icon={faArrowDownAZ} />
        </button>
        <button>
          <FontAwesomeIcon icon={faCalendar} />
        </button>
      </ControlsContainer>
    </ProjNavContainer>
  );
};

export default ProjectNavigation;
