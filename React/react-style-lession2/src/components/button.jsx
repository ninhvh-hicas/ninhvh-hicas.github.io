import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myButton: {
    padding: (props) => props.spacing,
  },
  myLabel: (props) => ({
    display: "block",
    color: props.labelColor,
    fontWeight: props.fontWeight,
    fontStyle: props.fontStyle,
  }),
});

const Button = ({ children, ...props }) => {
  const classes = useStyles(props);
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  );
};

Button.defaultProps = {
  spacing: 10,
  fontWeight: "bold",
  labelColor: "red",
};

function MyButton() {
  return (
    <div>
      <Button>Submit</Button>
    </div>
  );
}

export default MyButton;
