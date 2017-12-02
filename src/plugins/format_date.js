import { format } from 'date-fns'

export default value => format(new Date(value * 1000), 'YYYY-MM-DD HH:mm:ss')
