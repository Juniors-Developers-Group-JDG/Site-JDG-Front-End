'use client'
import { createCookie, getCookie } from '@/app/actions'
import { fetcher } from '@/hooks/useFetch'
import { opportunityFormPropsSchema } from '@/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { AiFillGithub } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { FiLinkedin, FiPhone } from 'react-icons/fi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { MdOutlineEmail } from 'react-icons/md'
import { toast } from 'react-toastify'
import Input from '../Input'
import { CardOpportunitiesProps, OpportunityFormProps } from './types'

export default function OpportunityCardPage({
  description,
  stack,
  endDate,
  title,
  jobOpportunityId,
}: CardOpportunitiesProps) {
  const [alreadyAppliedCookie, setAlreadyAppliedCookie] = useState<
    string | undefined
  >(undefined)

  const alreadyAppliedToCurrentOpportunity = useMemo(
    () =>
      alreadyAppliedCookie
        ? alreadyAppliedCookie.split(',').includes(jobOpportunityId)
        : false,
    [alreadyAppliedCookie, jobOpportunityId],
  )

  const methods = useForm<OpportunityFormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(opportunityFormPropsSchema),
  })

  const parsedDate = format(new Date(endDate), 'dd/MM/yyyy')

  const onSubmit = async (data: OpportunityFormProps) => {
    if (data) {
      try {
        const res = await fetcher<{ id: string } | undefined>({
          input: '/candidate',
          init: {
            method: 'POST',
            body: {
              ...data,
              jobOpportunities: jobOpportunityId,
              cv: `${data.name}@cv`,
            },
          },
        })

        if (!res?.id) {
          throw new Error(String(res))
        }

        const cookie = `${alreadyAppliedCookie || ''}${jobOpportunityId},`

        await createCookie('already-applied', cookie)

        setAlreadyAppliedCookie(cookie)

        toast.success('Candidatura realizada com sucesso')

        methods.reset()
      } catch (err) {
        console.error({ err })

        toast.error('Erro ao se candidatar')
      }
    }
  }

  const route = useRouter()
  const handleBack = useCallback(() => {
    route.back()
  }, [route])

  useEffect(() => {
    getCookie('already-applied').then((cookie) =>
      setAlreadyAppliedCookie(cookie),
    )
  }, [])

  return (
    <section className="container flex flex-col items-center justify-center gap-5">
      <BsArrowLeft
        onClick={handleBack}
        className="my-10 h-12 w-12 self-start rounded-full border border-secondary-500 border-opacity-30 p-2 text-secondary-50 transition-all ease-in-out hover:cursor-pointer hover:border-opacity-100"
      />
      <section className="flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-lg border border-primary-400 bg-primary-900 p-8 xl:h-96">
        <span className="self-start rounded-lg bg-primary-800 p-2 text-xs text-secondary">
          Estamos procurando um novo
        </span>

        <article className="mt-4 flex w-full flex-col items-start xl:flex-row xl:justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-wider text-secondary">
              {title}
            </h1>
            {stack.map((stack, index) => (
              <span
                key={stack}
                data-tech={stack}
                className="relative p-2 text-xs tracking-wider text-primary-400"
              >
                {stack}
                {index < stack.length - 1 && (
                  <span className="absolute top-[5.5px] pl-[5.5px] text-primary-400">
                    .
                  </span>
                )}
              </span>
            ))}
          </div>
          <span className="mt-5 text-xs text-secondary-50 xl:m-0 xl:text-base">
            Inscrições até {parsedDate}
          </span>
        </article>

        <p className="text-base leading-8 tracking-wide text-secondary-500">
          {description}
        </p>
      </section>

      <section className="mt-10 w-full bg-secondary-880 px-4 py-16 xl:px-6">
        <span className="flex h-16 w-full gap-5 border border-x-transparent border-b-secondary-100 border-t-transparent">
          <h1 className=" text-2xl text-secondary-50 xl:text-xxl">
            Voluntariar-se
          </h1>
        </span>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="relative mt-10 w-full"
          >
            <div
              data-show={alreadyAppliedCookie}
              className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 translate-y-1/2 text-3xl text-secondary data-[show=true]:block"
            >
              Candidatura já enviada!
            </div>
            <fieldset
              disabled={alreadyAppliedToCurrentOpportunity}
              className="flex flex-col justify-around disabled:opacity-30"
            >
              <section className="space-y-10">
                <Input
                  type="text"
                  name="name"
                  label="Nome completo*"
                  icon={HiOutlineUserCircle}
                  placeholder="Ana Clara Araujo"
                  required
                />

                <Input
                  type="email"
                  name="email"
                  label="Email*"
                  icon={MdOutlineEmail}
                  placeholder="anaclara@gmail.com"
                  required
                />
                <Input
                  type="text"
                  name="telephone"
                  label="Telefone*"
                  icon={FiPhone}
                  placeholder="(64) 9 8135-2900"
                  required
                />

                <section className="flex flex-col gap-8 md:flex-row">
                  <Input
                    type="text"
                    name="linkedin"
                    label="Likedin"
                    icon={FiLinkedin}
                    placeholder="www.linkedin.com/in/anaclaraaraujoa"
                  />
                  <Input
                    type="text"
                    name="github"
                    label="Github"
                    icon={AiFillGithub}
                    placeholder="https://github.com/anaclaraaraujo"
                  />
                </section>
              </section>

              <button
                disabled={alreadyAppliedToCurrentOpportunity}
                type="submit"
                className="bg-gradient-btn mt-20 flex h-14 w-full cursor-pointer items-center justify-center rounded-lg border border-primary text-secondary-50 transition-all duration-300 hover:opacity-80 disabled:cursor-default disabled:hover:opacity-100"
              >
                Enviar
              </button>
            </fieldset>
          </form>
        </FormProvider>
      </section>
    </section>
  )
}
