import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import Apps from "@material-ui/icons/Apps";
import MoreVert from "@material-ui/icons/MoreVert";
import VideoCall from "@material-ui/icons/VideoCall";


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
  },
  menuIcon: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  icons: {
    paddingRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
}));

export function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuIcon} color="inherit">
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <IconButton className={classes.icons} color="inherit">
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <Apps />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <MoreVert />
          </IconButton>
          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            color="secondary"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
