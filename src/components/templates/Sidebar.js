import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import  './CSS/Sidebar.css'
const Sidebar=({children})=>{
    return(
        <div className="mainSidebar">
        <div>
      <ProSidebar className="proSidebar">
    
                <Menu iconShape="square">
                    <MenuItem>Dashboard</MenuItem>
                    <SubMenu title="Sales">
                    <MenuItem>Customers</MenuItem>
                    <MenuItem>Sales Orders</MenuItem>
                    </SubMenu>
                    <SubMenu title="Purchases">
                    <MenuItem>Vendors</MenuItem>
                    <MenuItem>Expenses</MenuItem>
                    </SubMenu>
                </Menu>
        </ProSidebar>

</div>

</div>
    )
}


// import React,{useState} from 'react'
// import {Nav } from 'react-bootstrap'
// import './CSS/Sidebar.css';
// import {makeStyles} from "@material-ui/core/styles"
// import AppBar from "@material-ui/core/AppBar"
// import MenuIcon from '@material-ui/icons/Menu';
// import Typography from "@material-ui/core/Typography"
// import Toolbar from "@material-ui/core/Toolbar"
// import ListItemText from "@material-ui/core/ListItemText"
// import ListItem from "@material-ui/core/ListItem"
// import List from "@material-ui/core/List"
// import Link from "@material-ui/core/Link"
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
// import IconButton from "@material-ui/core/IconButton"
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
// import Divider from "@material-ui/core/Divider"
// import Hidden from "@material-ui/core/Hidden"
// const navigationLinks=[
//   {name:"Dashboard",href:""} ,
//   {name:"Accounts Details",href:""},
//   {name:"Customer Details",href:""}
// ];
// const useStyles=makeStyles((theme)=>(
//   {
//     link:{
//       marginRight:20,
//     }
//   }
// ))

// const Sidebar = props => {
//   const styles = useStyles();
//   const [open, setOpen] =useState(false);

 
//   return (
//     <>
//     <Hidden>
//       <IconButton><MenuIcon onClick={()=>setOpen(true)}/></IconButton>
//     </Hidden>
//       <SwipeableDrawer anchor="left" open={open} onOpen={()=>setOpen(true)} onClose={()=>setOpen(false)}>
//         <div>
//         <IconButton><ChevronLeftIcon onClick={()=>setOpen(false)}/></IconButton>
//         </div>
//         <Divider/>
//         {navigationLinks.map((item)=>(
//       <ListItem>
//          <Link
//           className={styles.link}
//             color="textPrimary"
//             variant="button"
//             underline="none"
//             href={item.href}>
//               {item.name}
//          </Link>
//       </ListItem>
    
    
//     ))}

//       </SwipeableDrawer>
      
// </>
//   )
// }

 export default Sidebar