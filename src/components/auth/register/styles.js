import { makeStyles } from "@mui/styles"

export default makeStyles((theme) => ({
    main: {
        height: '100vh',
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    form_btn: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 12,
    }
}))