const moment = require('moment')
moment.locale('zh-cn')

const secondsOf1d = 60 * 60 * 24
/*
  unit = ['year', 'month', 'week', 'day', 'hour', 'minute' ]
*/
export function isSameOf (a, b, unit) {
  return a.clone().startOf(unit).unix() === b.clone().startOf(unit).unix()
}

export function humanize (timestamp) {
  // time 可以是时间戳，moment 对象，或者标准的 date 对象
  // let targetUnix = null
  // if (typeof time === 'number') {
  //   targetUnix = moment.unix(time)
  // }
  const target = moment.unix(timestamp)

  if (!target.isValid() || timestamp < 0) {
    return ''
  }

  const targetTime = target.format('HH:mm')
  const targetDate = target.format('YY-MM-DD')
  const now = moment()
  let humanizeTime = ''
  const delayDay = Math.floor((timestamp - now.clone().startOf('day').unix()) / secondsOf1d)

  if (isSameOf(now, target, 'day')) {
    humanizeTime = targetTime
    return humanizeTime
  }

  if (Math.abs(delayDay) < 7) {
    // 7天之内

    if (delayDay > 0) {
      humanizeTime = `${delayDay}天之后`
    } else {
      humanizeTime = `${delayDay}天之前`
    }

    switch (delayDay) {
      case 2:
        humanizeTime = '后天'
        break
      case 1:
        humanizeTime = '明天'
        break
      case -1:
        humanizeTime = '昨天'
        break
      case -2:
        humanizeTime = '前天'
        break
      default:
        break
    }

    return humanizeTime
  } else if (isSameOf(now, target, 'year')) {
    humanizeTime = '今年'
    return humanizeTime
  } else {
    humanizeTime = targetDate
    return humanizeTime
  }
}
