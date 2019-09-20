import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
  root: {
    color: "#b39ddb",
    '&$checked': {
      color: "#b39ddb",
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default function CheckboxLabels({ onChange, classes }) {
  const [state, setState] = React.useState({
    checkedA: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    onChange(event.target.checked);
  };

  return (
    <div className='checkbox-octaves'>
      <FormControlLabel
        label="2 octaves"
        control={
          <GreenCheckbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
        }
      />
    </div>
  );
}