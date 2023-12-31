import classes from '../Style/Button.module.css';

const Button = (props) => {
  return (
    <button className={classes.Button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;