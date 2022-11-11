function add(a: number, b: number) {
  return a + b;
}

describe('add test', () => {
  it('get 3 if 1 + 2', () => {
    expect(add(1, 2)).toBe(3);
  });
});

export {};
