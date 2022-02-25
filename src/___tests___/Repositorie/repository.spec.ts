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
});
