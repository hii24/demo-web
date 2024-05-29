import moment from 'moment';

export function formatDuration(started_at: number, finished_at: number): string {
  const duration = moment.duration(moment.unix(finished_at).diff(moment.unix(started_at)));
  const minutes = Math.floor(duration.asMinutes());
  const seconds = duration.seconds();
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} min`;
}
