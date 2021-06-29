import { Grid} from "@material-ui/core"
import ListComponent from "./ListComponent"
import GalleryComponent from "./GalleryComponent"

const ListGallery= () =>{
  return( 
    <div className="clasees.gridRoot">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ListComponent/>
        </Grid>
        <Grid item xs={12} md={6}>
          <GalleryComponent/>
        </Grid>
      </Grid>
    </div>
  )
}

export default ListGallery;
