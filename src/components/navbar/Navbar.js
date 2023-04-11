import "./navbar.scss";
import { Link } from "react-router-dom";
import { Stack, IconButton, Tooltip, Grid } from "@mui/material";
import WorkOutlineTwoToneIcon from "@mui/icons-material/WorkOutlineTwoTone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
	return (
		<Grid container direction="row" justifyContent="center" alignItems="center" className="navbar">
			<Grid item xs>
				<Link
					to="/portfolio/"
					className="navbar-title-link"
					alt="JP, back to top"
				>
					JP
				</Link>
			</Grid>
			<Grid item xs>
				<Stack
					spacing={{ xs: 1, sm: 2, md: 4 }}
					direction="row"
					justifyContent="flex-end"
					alignItems="center"
				>
					<Tooltip title="Work Experience">
						<IconButton aria-label="Work Experience">
							<WorkOutlineTwoToneIcon className="blue" />
						</IconButton>
					</Tooltip>
					<Tooltip title="Github">
						<IconButton aria-label="Github" href="https://github.com/jazperez">
							<GitHubIcon className="purple" />
						</IconButton>
					</Tooltip>
					<Tooltip title="Linkedin">
						<IconButton
							aria-label="Linkedin"
							href="https://www.linkedin.com/in/jazmin-perez24/"
						>
							<LinkedInIcon className="pink" />
						</IconButton>
					</Tooltip>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default Navbar;
