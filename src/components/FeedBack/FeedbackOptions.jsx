import s from "./FeedBack.module.css";

const FeedbackOptions = ({
  onLeaveGoodFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) => (
  <ul className={s.buttonList}>
    <li className={s.button__item}>
      <button type="button" onClick={onLeaveGoodFeedback}>
        good
      </button>
    </li>
    <li className={s.button__item}>
      <button type="button" onClick={onLeaveNeutralFeedback}>
        neutral
      </button>
    </li>
    <li className={s.button__item}>
      <button type="button" onClick={onLeaveBadFeedback}>
        bad
      </button>
    </li>
  </ul>
);

export { FeedbackOptions };
