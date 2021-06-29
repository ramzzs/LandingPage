import { makeStyles, Paper, Typography, Divider, Button} from "@material-ui/core"
import EmailIcon from "@material-ui/icons/Email"

const Emoji = props =>( 
<span
  role="img"
  arial-lable={props.label ? props.label: ""}
  arial-hidden={props.label ? "false": "true"}>
  {props.symbol}
</span>
    )

const Explanation = () =>{
const classes = useStyles()
  return( 
  <Paper variant="outlined" elevation={0} square className={classes.explantion}>
    <Typography variant="subtitle2" paragraph gutterBottom>
      <strong>Lorem</strong><Emoji symbol="✌️" label="victory"/> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
    </Typography>
    <Divider/>
    <Typography variant="subtitle1" paragraph gutterBottom style={{margin:"1rem 1.5rem"}}>
      <strong>Lorem</strong><Emoji symbol="✌️" label="victory"/> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      Lorem quibusdam dolorem alias voluptatibus similique. Enim laboriosam architecto possimus aspernatur aut quod corrupti Voluptates similique qui autem libero sed et asperiores nobis dicta. Animi incidunt nesciunt nemo hic est Nam a voluptatibus maiores ea aspernatur aspernatur nesciunt Ut similique fugit iusto doloribus optio? Delectus asperiores impedit quaerat quisquam impedit.
    </Typography>
    <Typography variant="subtitle1" paragraph gutterBottom >
      <strong>Lorem</strong><Emoji symbol="✌️" label="victory"/> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      Lorem quibusdam dolorem alias voluptatibus similique. Enim laboriosam architecto possimus aspernatur aut quod corrupti Voluptates similique qui autem libero sed et asperiores nobis dicta. Animi incidunt nesciunt nemo hic est Nam a voluptatibus maiores ea aspernatur aspernatur nesciunt Ut similique fugit iusto doloribus optio? Delectus asperiores impedit quaerat quisquam impedit.
      Lorem commodi quia illo quia vel? Illum quas fugiat perspiciatis omnis corporis Aspernatur numquam commodi at ut dolor eum Iure cumque eligendi eum nemo voluptatum expedita Molestias fugit incidunt deleniti
    </Typography>
      <div className={classes.action}>
        <Button cariant="contained" startIcon={<EmailIcon/>} style={{margin:"2rem 0", backgroundColor:"#ea5933", padding:".5rem 1rem"}}>
          <a href="mailto:example@gmail.com" className={ classes.link }>
            Send me an email <span className={classes.extendText}>to learn more ...</span>
          </a>
        </Button>
          <Typography variant="h6">
            Or get in touch at miranda@cuttingedge-event.com
          </Typography>
      </div>
  </Paper>
  )
}

export default Explanation ;

  const useStyles = makeStyles((theme)=>({
    explantion:{
      width:"inherit",
      height: "auto",
      padding:theme.spacing(2),
      textAlign:"justify"
    },
    action:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      "& button:hover":{
        backgroundColor:"#ccc !important"
      }
    },
    link:{
      color:"#fff",
      fontWeight:"bold",
      fontSize:"1rem",
      textDecoration:"none",
      fontStyle:"italic",
    },
    [theme.breakpoints.down("md")]:{
    extendText:{
      display:"none" 
    }
    }
  }))
