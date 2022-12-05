import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export function EventListItem(){
    return (
        <Grid>
            <Paper variant="outlined" className="LiftOnHover">
                <Grid container spacing={1}>
                    <Grid>
                        <Box className="ItemPreviewImage">
                            <img alt="Game image" src="https://media3.giphy.com/media/CNAhQuDceLwwo/giphy.gif"/>
                        </Box>
                    </Grid>
                    <Grid>
                        <h3>Event title</h3>
                        <p>Event date / time</p>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}