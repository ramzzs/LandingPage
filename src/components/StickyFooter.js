import { makeStyles, Container, Typography} from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite"

const Copyright = () =>{
return(
  <Typography variant="body2" color="textSecondary">
    Copyright ©
    {
      new Date().getFullYear()
    }
  </Typography>
)
}

const StickyFooter= () =>{
const classes = useStyles()
  return( 
<footer className={classes.footer}>
  <Container maxWidth="sm">
    <Typography variant="body1">
      Curated with <FavoriteIcon style={{color:"red"}}/>
        by the <span>
          <a href="https://youtu.be/UqWY_par4eQ" target="_blank" rel="noreferrer">CUTT/events</a>
        </span>
    </Typography>
    <Copyright/>
  </Container>
</footer>
  )
}

export default StickyFooter;

  const useStyles = makeStyles((theme)=>({
  footer:{
  padding: theme.spacing(3,2),
  marginTop:"auto",
  textAlign:"center",
  backgroundColor:"#2f2f2f",
  color:"#fff"
  }
  }))
