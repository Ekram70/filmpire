import { Divider, List, ListItem, ListItemText, ListSubheader } from '@mui/material'
import { useTheme } from '@mui/styles'
import React from 'react'
import { Link } from 'react-router-dom'

import useStyles from './styles'

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

type sidebarProps = {
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type categories = {
    label: string;
    value: string;
}[]

const categories: categories = [
    {label: "Popular", value: 'popular'},
    {label: "Top Rated", value: 'top_rated'},
    {label: "Upcoming", value: 'upcoming'},
]

const demoCategories: categories  = [
    {label: "Comedy", value: 'comedy'},
    {label: "Action", value: 'action'},
    {label: "Horror", value: 'horror'},
    {label: "Aniation", value: 'animation'},
]


const Sidebar = ({setMobileOpen}: sidebarProps) => {
    const theme = useTheme();
    const classes = useStyles()
  return (
    <>
        <Link to='/' className={classes.imageLink}>
            <img 
                className={classes.image}
                src={theme.palette.mode === 'light' ? redLogo: blueLogo}
                alt="Filmpire logo"
            />
        </Link>
        <Divider />
        <List>
            <ListSubheader>Categories</ListSubheader>
            {categories.map(({label, value})=>(
                <Link key={value} className={classes.links} to='/'>
                    <ListItem onClick={()=>{}} button>
                        {/* <ListItemIcon>
                            <img src={redLogo}  className={classes.genreImage} height={30} />
                        </ListItemIcon> */}
                        <ListItemText primary={label} />
                    </ListItem>
                </Link>
            ))}
        </List>
        <Divider />
        <List>
            <ListSubheader>Genres</ListSubheader>
            {demoCategories.map(({label, value})=>(
                <Link key={value} className={classes.links} to='/'>
                    <ListItem onClick={()=>{}} button>
                        {/* <ListItemIcon>
                            <img src={redLogo}  className={classes.genreImage} height={30} />
                        </ListItemIcon> */}
                        <ListItemText primary={label} />
                    </ListItem>
                </Link>
            ))}
        </List>
    </>
  )
}

export default Sidebar