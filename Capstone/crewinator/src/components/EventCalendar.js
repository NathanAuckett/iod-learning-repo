
import Grid from "@mui/material/Unstable_Grid2/Grid2"

import { CalendarDay } from "./CalendarDay"

export function EventCalendar(){
    let days = [];
    for (let i = 0; i < 30; i ++){
        days[i] = i + 1;
    }
    
    return (
        <Grid container>
            {days.map((day, i) => <CalendarDay key={i} dayNum={day}/>)}
        </Grid>
    )
}