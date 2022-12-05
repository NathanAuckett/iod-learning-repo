import Grid from '@mui/material/Unstable_Grid2';

import { EventList } from '../components/EventList';
import { EventCalendar } from '../components/EventCalendar';

export function EventsView() {

    return (
        <>
            <Grid container direction="row" xs={12}>
                <Grid xs={10}>
                    <h4 style={{marginLeft: "1rem"}}>Upcoming Events</h4>
                </Grid>
                <Grid xs={2} display="flex" justifyContent="right">
                    <h4 style={{marginRight: "1rem"}}>Month</h4>
                </Grid>
            </Grid>
            <Grid xs={3.5}>
                <EventList/>
            </Grid>
            <Grid xs={0.5}></Grid>
            <Grid xs={8}>
                <EventCalendar/>
            </Grid>
        </>
    )

}