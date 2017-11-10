import moment from 'moment'
import 'moment-timezone'

export default value => moment.tz(value * 1000, 'Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss')
