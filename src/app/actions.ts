'use server'

import { cookies } from 'next/headers'

export const createCookie = async (
  key: string,
  value: string,
  maxAgeInMs: number = 60 * 60 * 1, // 1 hour
) => {
  cookies().set(`sie-jdg.${key}`, value, {
    maxAge: maxAgeInMs,
  })
}

export const deleteCookie = async (key: string) => {
  cookies().set(`sie-jdg.${key}`, '', {
    maxAge: 0,
  })
}

export const getCookie = async (key: string) =>
  cookies().get(`sie-jdg.${key}`)?.value
