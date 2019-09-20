import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ReplayIcon from '@material-ui/icons/Replay';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    "background-color": "rgba(56, 56, 56, 0.72);",
    color: "rgba(255, 255, 255, 0.72);",
    "margin-top": "20px;"
  }
}));

export default function ResetButton({ onClick }) {
  const classes = useStyles();

  return (
    <Fab size="small" onClick={onClick} className={classes.fab}>
      <ReplayIcon />
    </Fab>
  );
}