import { makeStyles } from "@mui/styles"

export default makeStyles((theme) => ({
    main: {
        width: '100%',
    },
    task: {
        display: 'flex',
        flexDirection: 'column',
    },
    task_actions: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: 6,
        paddingRight: 6,
        width: '100%',
    },
    delete: {
        width: 240,
    },
    delete_container: {
        display: 'flex',
        justifyContent: 'center',
    },
}))