'use client'

import useSWR from 'swr'

interface FetcherKey {
  input: RequestInfo | URL
  init?: RequestInit
}

async function fetcher<JSON = unknown>({
  input,
  init,
}: FetcherKey): Promise<JSON> {
  if (!process.env.NEXT_PUBLIC_BACKEND_URL)
    throw new Error('NEXT_PUBLIC_BACKEND_URL environment variable missing!')

  const url = process.env.NEXT_PUBLIC_BACKEND_URL + input

  const res = await fetch(url, init)
  return res.json()
}

export function useFetch<ResType = unknown>(input: string, init?: RequestInit) {
  return useSWR({ input, ...init }, fetcher<ResType>)
}
