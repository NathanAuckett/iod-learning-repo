import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Paper from "@mui/material/Paper"

export function CalendarDay(props){
    return (
        <Grid xs={2} style={{height: "8rem"}}>
            <Paper variant="outlined" square className="LiftOnHover" style={{width: "100%", height: "100%", textAlign: "center"}}>
                <h4>{props.dayNum}</h4>
            </Paper>
        </Grid>
    )
}