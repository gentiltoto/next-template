/**
 * @jest-environment node
 */

import type { NextApiRequest, NextApiResponse } from 'next';

import handler from '@/pages/api/hello';

describe('hello API endpoint', () => {
  it('Returns the name John Doe', async () => {
    const req = {
      body: JSON.stringify({})
    } as NextApiRequest;

    const json = jest.fn();

    const status = jest.fn(() => {
      return {
        json
      };
    });

    const res = {
      status
    } as unknown as NextApiResponse;

    await handler(req, res);

    expect(json.mock.calls[0][0].name).toEqual('John Doe');
  });
});
