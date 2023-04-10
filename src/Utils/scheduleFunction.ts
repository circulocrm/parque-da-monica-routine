export function scheduleFunction(
  hour: number,
  minute: number,
  cbFunction: () => Promise<void>,
) {
  const now = new Date();
  const triggerTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hour,
    minute,
    0,
  );
  if (now >= triggerTime) {
    triggerTime.setDate(triggerTime.getDate() + 1);
  }
  const timeout = triggerTime.getTime() - now.getTime();
  setTimeout(async () => {
    await cbFunction();
    scheduleFunction(hour, minute, cbFunction);
  }, timeout);
}
