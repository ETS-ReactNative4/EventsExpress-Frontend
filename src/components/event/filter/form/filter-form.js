import { Button, Icon, IconButton } from '@material-ui/core';
import React from 'react';
import { useFilterStyles } from '../filter-styles';
import { reduxForm } from 'redux-form';
import { GreenButton } from './green-button';

const FilterForm = ({ toggleOpen }) => {
    const classes = useFilterStyles();

    return (
        <form>
            <div className={classes.filterHeader}>
                <div className={classes.filterHeaderPart}>
                    <IconButton onClick={toggleOpen}>
                        <Icon className="fas fa-arrow-right" />
                    </IconButton>
                    <h5 className={classes.filterHeading}>Filters</h5>
                </div>
                <div className={classes.filterHeaderPart}>
                    <GreenButton>Apply</GreenButton>
                    <Button color="secondary">Reset</Button>
                </div>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'filter-form'
})(FilterForm);
