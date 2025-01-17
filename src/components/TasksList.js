import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../reducers/taskSlice';
// import { change, changeAvailable, remove } from '../reducers/goodsSlice';



function TasksList() {

    const tasks = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();

    // const onDeleteButtonClick = (e) => {
    //     dispatch(remove(e.target.value));
    // };

    // const onChangeAvailableButtonClick = (e) => {
    //     dispatch(changeAvailable(e.target.value));
    // };

    // const onChangeButtonClick = (e) => {
    //     const current = state.goods.filter((item) => item.id == e.target.value);
    //     dispatch(change(current));
    // };


    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
                margin: 2,
            }}
        >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Описание</TableCell>
                        <TableCell align="right">Статус</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((item) => (
                        <TableRow
                            key={item.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{item.id}</TableCell>
                            <TableCell>{item.title}</TableCell>
                            <TableCell align="right">{item.completed ? "выполнено" : "не выполнено"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Button
                variant="contained"
                onClick={() => { dispatch(fetchTasks()) }}
            >
                Загрузить
            </Button>
        </Box>
    );
}

export default TasksList;