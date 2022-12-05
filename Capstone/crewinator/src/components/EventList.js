
import Grid from "@mui/material/Unstable_Grid2/Grid2"

import {EventListItem} from "./EventListItem"

export function EventList(){
    return (
        <Grid container direction="column">
            <EventListItem/>
            <EventListItem/>
            <EventListItem/>
            <EventListItem/>
        </Grid>
    )
}