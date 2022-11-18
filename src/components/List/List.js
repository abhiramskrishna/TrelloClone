import React from 'react'
import { Paper, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Card from '../Card';
import InputContainer from '../Input/InputContainer';

const useStyle = makeStyles((theme)=>({
    root:{
        width: '400px',
        backgroundColor: '#F0F0F0',
        marginLeft: theme.spacing(1),
    }
}

));


export default function List() {
    const classes = useStyle();
    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                <Title />
                <Card />
                <Card />
                <Card />
                <InputContainer />
            </Paper>
        </div>
  );
}