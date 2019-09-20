import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import scales from './scales.js'

const useStyles = makeStyles({
  root: {
    width: 500,
    "margin-left": "auto;",
    "margin-right": "auto;",
    "margin-top": "50px;",
    "margin-bottom": "50px;"
  },
  button: {
    margin: "3px;" 
  }
});

export default function ScaleList({ potentialScales, onClick, keys }) {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
        {
            potentialScales.map((scale, index) => (
                <Button variant="contained" className={classes.button} key={index} onClick={() => {onClick(scale.keyIndex, scale.scaleIndex)}}>
                    {keys[scale.keyIndex].name + ' ' + scales[scale.scaleIndex].name}
                </Button>
            ))
        }
    </ul>
  );
}