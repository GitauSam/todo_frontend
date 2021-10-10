import { makeStyles } from "@mui/styles"

export default makeStyles((theme) => ({
    main: {
        height: '100vh',
        width: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: 180,
        backgroundColor: '#e2e2e2',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 4,
        marginBottom: 12,
    },
    form_input: {
        marginBottom: 12,
    },
    paper: {
        width: 960,
        // height: 420,
    }
}))