import MockReportImplementation from '../../Repositories/implementation/MockReportImplementation';

describe('Repository implementation', () => {
  it('Should return true when connected', () => {
    const mockReportImplementation = new MockReportImplementation();
    mockReportImplementation.handleConnect();

    expect(mockReportImplementation.connected).toBe(true);
  });

  it('Should return false when connected', () => {
    const mockReportImplementation = new MockReportImplementation();

    mockReportImplementation.handleConnect();
    mockReportImplementation.handleConnect();

    expect(mockReportImplementation.connected).toBe(false);
  });

  it('Should return empty array when has no logs', () => {
    const mockReportImplementation = new MockReportImplementation();

    expect(mockReportImplementation.logs).toEqual([]);
  });

  it('Should add a new log to logs array', () => {
    const mockReportImplementation = new MockReportImplementation();

    mockReportImplementation.addLog({ text: 'newLog', date: '25/02' });

    expect(mockReportImplementation.logs).toEqual([{ text: 'newLog', date: '25/02' }])
  })

  it('It should not return empty array when add logs', () => {
    const mockReportImplementation = new MockReportImplementation();

    mockReportImplementation.addLog({ text: 'newLog', date: '25/02' });

    expect(mockReportImplementation.logs).not.toEqual([])
  })
});
