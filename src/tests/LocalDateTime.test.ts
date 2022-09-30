import LocalDateTime from '@utils/LocalDateTime';

describe('LocalDateTime', () => {
  it('returns if time is lower than 10', () => {
    const dateTime = new LocalDateTime('1995-12-17T03:24:00');

    expect(dateTime.hours).toBe('03');
    expect(dateTime.minutes).toBe('24');
    expect(dateTime.seconds).toBe('00');
  });
});
