export default function templateWithLoader(
  rawCode: string,
  {
    page,
    typescript,
    loader,
    hasLoader,
    hasLoadLocaleFrom,
    revalidate,
  }?: {
    page?: string | undefined
    typescript?: boolean | undefined
    loader?: string | undefined
    hasLoader?: boolean | undefined
    hasLoadLocaleFrom?: boolean | undefined
    revalidate?: number | undefined
  }
): string
