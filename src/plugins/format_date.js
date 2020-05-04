import { format } from 'date-fns'

export default value => format(new Date(value * 1000), 'yyyy-MM-dd HH:mm:ss')
