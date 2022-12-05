
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

import PeopleIcon from '@mui/icons-material/People';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import EventIcon from '@mui/icons-material/Event';

import { Link, useLocation} from 'react-router-dom';


function NewButton(props){
    let button;

    switch (props.path){
        case "/dashboard/games":
            button = <Button variant="contained" style={{marginLeft: "1rem"}}>Add Game</Button>;
            break;
        case "/dashboard/friends":
            button = <Button variant="contained" style={{marginLeft: "1rem"}}>Add Friend</Button>;
            break;
        default: button = <Button variant="contained" style={{marginLeft: "1rem"}}>New Event</Button>;
    }

    return button;
}


export function MenuBar(props){
    const location = useLocation();
    const path = location.pathname;

    return(
        <Grid container direction="row" xs={12}>
            <Grid xs={10}>
                <NewButton path={path}/>
            </Grid>
            <Grid xs={2} display="flex" justifyContent="right">
                {path !== "/dashboard" ? 
                    <Link to=""><Button><EventIcon fontSize='large'/></Button></Link> : null
                }
                {path !== "/dashboard/games" ? 
                    <Link to="games"><Button><VideogameAssetIcon fontSize='large'/></Button></Link> : null
                }
                {path !== "/dashboard/friends" ? 
                    <Link to="friends"><Button><PeopleIcon fontSize='large'/></Button></Link> : null
                }
                <Button><NotificationsNoneIcon fontSize='large'/></Button>
            </Grid>
        </Grid>
        
    )
}