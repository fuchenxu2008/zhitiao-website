export const getTime = (
  time,
  timeNow = Date.parse(new Date()),
  updateMode = false
) => {
  const language = 'zh';
  const langMap = {
    day: { zh: '天前', en: ' days ago' },
    day_last: { zh: '昨天', en: 'yesterday' },
    day_before: { zh: '前天', en: '2 days ago' },
    hour: { zh: '小时前', en: ' hrs ago' },
    minute: { zh: '分钟前', en: ' mins ago' },
    second: { zh: '秒前', en: ' secs ago' },
    recent: { zh: '刚刚', en: 'just now' }
  };
  const current = Number(String(timeNow).substr(0, 10));
  const timeDiff = current - Number(String(Date.parse(time)).substr(0, 10));
  let timeMsg;
  if (timeDiff > 59) {
    const minute = Math.floor(timeDiff / 60);
    if (minute > 59) {
      const hour = Math.floor(minute / 60);
      if (hour > 23) {
        const day = Math.floor(hour / 24);
        if (day > 2) {
          timeMsg = day + langMap.day[language];
        } else {
          if (day > 1) timeMsg = langMap.day_before[language];
          else timeMsg = langMap.day_last[language];
        }
      } else {
        timeMsg = hour + langMap.hour[language];
      }
    } else {
      timeMsg = minute + langMap.minute[language];
    }
  } else {
    if (timeDiff <= 3) timeMsg = langMap.recent[language];
    else timeMsg = timeDiff + langMap.second[language];
  }
  return updateMode
    ? language === 'zh'
      ? `${timeMsg}更新`
      : `updated ${timeMsg}`
    : timeMsg;
};
