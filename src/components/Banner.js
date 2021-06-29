import { makeStyles, Paper, Typography} from "@material-ui/core"
import StarsIcon from '@material-ui/icons/Stars';

const Banner = () =>{
const classes = useStyles()
  return( 
  <>
    <Paper variant="outlined" square elevation={0} className={classes.banner}>
      <div className={classes.titleContainer}>
        <Typography variant="h4" component="h1" className={classes.title}>
          Resets your Events in <span style={{color:"#ea5933"}}>BCN</span>
        </Typography>
      </div>
      <div className={classes.subtitleContainer}>
        <Typography className={classes.subTitle} variant="h6">
          Organiza your meating in a ...
          <br />
          100% certificated
          <StarsIcon className={classes.icon} fontSize="small"/>
          best-in-class-speed-connection
          <StarsIcon className={classes.icon} fontSize="small"/>
          Surrounded by nature
          <StarsIcon className={classes.icon} fontSize="small"/>
            20-mins from barcelona
        </Typography>
      </div>
    </Paper>
  </>
  )
}

export default Banner;


  const useStyles = makeStyles((theme)=>({
  banner:{
    width:"inherith",
    height:"55vh",
    backgroundImage:`url("https://placeimg.com/1920/800/arch")`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center center",
    color:"#fff",
    fontWeight:"bold",
    position:"relative"
    },
    titleContainer:{
    background:"#000",
    opacity:"0.8",
    display:"flex",
    alignItems:"center",
    position:"absolute",
    top:0,
    left:0,
    right:0
    },
    title:{
    padding: theme.spacing(2)
    },
    subtitleContainer:{
    background:"#000",
    opacity:"0.9",
    position:"absolute",
    bottom:0,
    left:0,
    right:0
    },
    subTitle:{
    color:"#ea5933",
    fontWeight:"bold",
    padding: theme.spacing(3),
    textAlign:"center"
    },
    icon:{
    verticalAlign:"middle",
    margin:theme.spacing(0,1)
    },
    [theme.breakpoints.down("sm")]:{
    title:{
      fontSize:"1.5rem"
    },
    subTitle:{
      fontSize:"0.9rem"
    }
    },
    [theme.breakpoints.down("xs")]:{
    title:{
      fontSize:"1rem",
    },
    subTitle:{
    display:"none",
    }
    },
  }))
