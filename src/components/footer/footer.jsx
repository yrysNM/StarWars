import { Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";


const copyRight = () => {
    return (
        <Typography variant="body2" color="#fff" align="center">
            {"Copyright ©"}
            <Link color="inherit" href="https://github.com/yrysNM">
                GitHub
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}


export const Footer = (props) => {
    return (
        <Box component="footer" sx={{ bgColor: "background.paper", py: 6 }}>
            <Container maxWidth="lg">
                {copyRight()}
                <Typography variant="h6" align="center" gutterBottom>
                    <Link href='#' color="#fff">
                        Star Wars
                    </Link> 
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    component="p"
                    color="#fff"
                >
                    Star Wars is an American epic space-opera[1] multimedia franchise created by George Lucas, 
                </Typography>

            </Container>
            
        </Box>
    );
}

export default Footer;