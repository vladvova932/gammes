import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  select: {
    color: "rgba(255, 255, 255, 0.87);",
    "&:before": {
      "border-bottom": "1px solid rgba(255, 255, 255, 0.42);",
    },
    "& svg": {
      color: "rgba(255, 255, 255, 0.54);"
    },
    // "&.Mui-focused:before": {
    //   "border-bottom": "1px solid #ffb2ff;"
    // }
  },
  inputLabel: {
    color: "rgba(255, 255, 255, 0.54);",
    // "&.Mui-focused": {
    //   color: "#ffb2ff;"
    // }
  }
});

class SimpleSelect extends React.Component {
  state = {
    selected: ""
  };

  reset() {
    console.log('RESET')
    this.setState({
      selected: ""
    })
  }

  render() {
    const { classes, data, type, onChange, htmlID } = this.props

    const { selected } = this.state

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="name" className={classes.inputLabel}>{type}</InputLabel>
        <Select
          name="name"
          value={selected}
          onChange={event => {
            const keyIndex = event.target.value
            this.setState({ selected: keyIndex });
            onChange(keyIndex)
          }}
          input={<Input id="name" />}
          className={classes.select}
          id={htmlID}
        >
          {data.map((pianoKey, index) => {
              if (index < 12) {
                return <MenuItem key={index} value={index}>{pianoKey.name}</MenuItem>
              }
            }
          )}
        </Select>
      </FormControl>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);