'use client'

import useSWR from 'swr'

type Init = Omit<RequestInit, 'body'> & {
  body?: object
}

interface FetcherKey {
  input: RequestInfo | URL
  init?: Init
}

export async function fetcher<JSON = unknown>({
  input,
  init,
}: FetcherKey): Promise<JSON> {
  if (!process.env.NEXT_PUBLIC_BACKEND_URL)
    throw new Error('NEXT_PUBLIC_BACKEND_URL environment variable missing!')

  const url = process.env.NEXT_PUBLIC_BACKEND_URL + input

  const res = await fetch(url, {
    ...init,
    body: init?.body ? JSON.stringify(init.body) : undefined,
  })

  return res.json()
}

export function useFetch<ResType = unknown>(input: string, init?: Init) {
  return useSWR({ input, ...init }, fetcher<ResType>)
}
