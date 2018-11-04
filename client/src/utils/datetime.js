import moment from 'moment';

export default (datetime, format) =>
  !datetime
    ? ''
    : moment(datetime, 'YYYY-MM-DDTHH:mm:ss.SSS')
        .format(format || 'LLLL')
        .toString();
