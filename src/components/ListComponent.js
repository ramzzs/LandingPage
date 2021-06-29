import { makeStyles, List, ListSubheader, ListItem, ListItemIcon, ListItemText} from "@material-ui/core"
import data from "../listData"

const ListComponent= () =>{
const classes = useStyles()
  return( 
  <List component="nav" arial-aria-labelledby='nested-list-subheader'
    subheader={
      <ListSubheader component="div" aria-labelledby="nested-list-subheader">
        Cost based on a group of 30px 
      </ListSubheader>
    }>
        {
        data.map(item => (
        <ListItem key={item.text}>
          <ListItemIcon className={classes.icon}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text}/>
        </ListItem>
        ))
        }
  </List>
  )
}

export default ListComponent;

  const useStyles = makeStyles((theme)=>({
  icon:{
      color: "#ea5933"
  }
  }))

