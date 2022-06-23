import {Center, Pagination } from '@mantine/core';

const Pag = ({ error, page, setPage }) => (
    <Center mt='sm'>
    { !error && <Pagination total={7} page={page} onChange={setPage} />}
    </Center>
)
export default Pag