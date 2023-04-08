import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import FieldText from 'forms/FieldText'
import Views from 'common/Views'
import { BiSearch } from 'react-icons/bi'
import useDebounce from 'hooks/useDebounce'
import * as S from './Search.styles'

type SearchProps = {
  onSubmit?: (term: string) => void
  loading?: boolean
}

type IFormInputs = {
  term: string
}

const Search: React.FC<SearchProps> = ({ onSubmit, loading = false }) => {
  const [term, setTerm] = useState('')

  const { handleSubmit, register } = useForm<IFormInputs>()
  const { debouncedValue, loading: loadingDebounce } = useDebounce(term)

  function handleSubmitSearch(data: IFormInputs) {
    const termData = data?.term || ''
    if (onSubmit) {
      onSubmit(termData.trim())
    }
  }

  useEffect(() => {
    if (onSubmit) {
      onSubmit(debouncedValue.trim())
    }
  }, [debouncedValue, onSubmit])

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitSearch)}>
      <Views>
        <FieldText
          {...register('term')}
          value={term}
          onChange={(e) => setTerm(e.currentTarget.value || '')}
          icon={<BiSearch />}
          loading={loadingDebounce || loading}
        />
      </Views>
    </S.Form>
  )
}

export default Search
