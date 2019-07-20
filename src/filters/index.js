import dayjs from 'dayjs'

export function formatDT (dt) {
    return dt ? dayjs(dt).format('YYYY-MM-DD HH:mm:ss') : '-'
}
