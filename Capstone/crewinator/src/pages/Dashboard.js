import "../components/Item.css"

import Grid from '@mui/material/Unstable_Grid2';

import { EventList } from '../components/EventList';
import { EventCalendar } from '../components/EventCalendar';
import { MenuBar } from '../components/MenuBar';
import { Outlet } from 'react-router-dom';

export function Dashboard() {

    return (
        <Grid container direction="row">
            <MenuBar/>
            
            <Outlet/>
        </Grid>
    )

}