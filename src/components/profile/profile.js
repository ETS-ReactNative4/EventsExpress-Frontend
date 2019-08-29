import React from 'react';
import './profile.css';
import EditUsernameContainer from '../../containers/editProfileContainers/editUsernameContainer';
import EditGenderContainer from '../../containers/editProfileContainers/editGenderContainer';
import EditBirthdayContainer from '../../containers/editProfileContainers/editBirthdayContainer';
import ChangePasswordContainer from '../../containers/editProfileContainers/changePasswordContainer';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AddUserCategory from '../../containers/editProfileContainers/addUserCategoryContainer';
import { connect } from 'react-redux';
import genders from '../../constants/GenderConstants';
import ChangeAvatarWrapper from '../../containers/editProfileContainers/change-avatar';
import Moment from 'react-moment';
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));



 const Profile = (props) => {
    const classes = useStyles();
    
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
             <ExpansionPanel expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Change Avatar</Typography>
                    </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    
                    <Typography>
                        <MuiThemeProvider>
                            <ChangeAvatarWrapper />
                        </MuiThemeProvider>
                    </Typography>

                </ExpansionPanelDetails>

            </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Username</Typography>
                    <Typography className={classes.secondaryHeading}>{props.name}</Typography>
                    </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    
                    <Typography>
                        <MuiThemeProvider>
                            <EditUsernameContainer />
                        </MuiThemeProvider>
                    </Typography>

                </ExpansionPanelDetails>

            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>Gender</Typography>
                    <Typography className={classes.secondaryHeading}>{genders[props.gender]}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                    <Typography>
                        <MuiThemeProvider>
                            <EditGenderContainer />
                        </MuiThemeProvider>
                    </Typography>

                </ExpansionPanelDetails>

            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>Date of birth</Typography>
                    <Typography className={classes.secondaryHeading}>{props.birthday}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                    <Typography>
                        <MuiThemeProvider>
                            <EditBirthdayContainer />
                        </MuiThemeProvider>
                    </Typography>

                </ExpansionPanelDetails>

            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>Favorite Categories</Typography>
                    <Typography className={classes.secondaryHeading}> {props.categories.map(
                        (c) => <div key={c.id}>{c.name}</div>
                    )}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                    <Typography>
                        <MuiThemeProvider>
                            <AddUserCategory  />
                        </MuiThemeProvider>
                    </Typography>

                </ExpansionPanelDetails>

            </ExpansionPanel>
            <ChangePasswordContainer/>
        </div>
    );
}



const mapStateToProps = state => {
    return state.user;
};


export default connect(mapStateToProps)(Profile);
