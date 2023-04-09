import { SOCIAL } from 'services/query/SOCIAL'
import * as S from './Socials.styles'
import { useQuery } from '@apollo/client'
import Views from 'common/Views/Views'

import GenerateSvg from 'components/GenerateSvg/GenerateSvg'
import Text from 'common/Text/Text'
import { SizeType } from 'styles/theme'

export type IconType = {
  url: string
}

export type SocialType = {
  id: string
  name: string
  title: string
  link: string
  icon: IconType
}

export type SocailListType = {
  socials: SocialType[]
}

const Socials = () => {
  const { data } = useQuery<SocailListType>(SOCIAL)

  return (
    <Views gap={1} justifyContent="center">
      {data?.socials.map((social) => (
        <Views key={social.id}>
          <S.Link href={social.link} target="_blank">
            <Text as="span" size={SizeType.EXTRA_LARGE}>
              <GenerateSvg url={social.icon.url} />
            </Text>
          </S.Link>
        </Views>
      ))}
    </Views>
  )
}

export default Socials
