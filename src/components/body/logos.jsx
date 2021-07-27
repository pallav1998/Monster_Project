import styles from "./home.module.css";

import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

export function Logos() {
  return (
    <div>
      <div className={styles.logos}>
        <h2>Employers of Choice</h2>
        <div>
          <div>
            <CgChevronLeft />
          </div>
          <div>
            <a href="#a">
              <img
                src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2018/october/lqRJeN6P7CjlvdVeZyaukhZdQ9NZfzosMNk6C1jn.jpeg"
                alt=""
              />
            </a>
            <a href="#a">
              <img
                src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/june/ZnNwNuQzQu0ja8wsf8vGg4ajsi5RRpd7vlOX71RC.jpeg"
                alt=""
              />
            </a>
            <a href="#a">
              <img
                src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/july/45Ir3b4aOZ3KdBXuscVLXooKdhzId56nqmfC5lwf.jpeg"
                alt=""
              />
            </a>
            <a href="#a">
              <img
                src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/march/gmOb9QRtCkUpKoGD5buz9IGq6k2lyJPRbu5ce10o.jpeg"
                alt=""
              />
            </a>
            <a href="#a">
              <img
                src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/march/LX0enPHH5vPMuiu6zxzn80kUVb9LbGc3EFmX2xIH.jpeg"
                alt=""
              />
            </a>
            <a href="#a">
              <img
                src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/march/g3es8MZgIi3qJs6E9Y3LrvRzrLJwgyFbWC0zbHOW.jpeg"
                alt=""
              />
            </a>
            <a href="#a">
              <img
                src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/april/kb2XuCAOzNmi30AczhMxZW3QUSS2L8zHsUdBtBJI.jpeg"
                alt=""
              />
            </a>
          </div>
          <div>
            <CgChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
