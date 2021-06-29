import { makeStyles, Paper, GridList, GridListTile,GridListTileBar} from "@material-ui/core"
import tileData from "../tileData"

const GalleryComponent= () =>{
const classes = useStyles()
  return( 
  <Paper variant="outlined" square elevation={0} className={classes.galleryRoot}>
    <div className={classes.mosaic}>
      <GridList cellHeight={220} className={classes.gridList}>
        {
        tileData.map(title =>(
        <GridListTile key={title.title}>
          <img src={title.img} alt={title.title}/>
          <GridListTileBar title={title.title}/>
        </GridListTile>
        ))
        }
      </GridList>
    </div>
  </Paper>
  )
}

export default GalleryComponent;

  const useStyles = makeStyles((theme)=>({
  galleryRoot:{
      height: "auto"
    },
  mosaic:{
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-arround"
  },
  gridList: {
    width: 1000,
    height: 550,
    "&::-webkit-scrollbar":{
      display:"none"
    }
  }
  }))


