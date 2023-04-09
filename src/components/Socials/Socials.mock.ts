import { SOCIAL } from 'services/query/SOCIAL'

export const SocialMock = [
  {
    id: '63903069',
    name: 'LinkedIn: @thomazot',
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/thomazot/',
    icon: {
      url: 'https://www.datocms-assets.com/65627/1673139434-linkedin.svg'
    }
  },
  {
    id: '63903072',
    name: 'GitHub: @thomazot',
    title: 'GitHub',
    link: 'https://github.com/thomazot',
    icon: {
      url: 'https://www.datocms-assets.com/65627/1673139488-github.svg'
    }
  },
  {
    id: '63903073',
    name: 'E-Mail: @thomazot',
    title: 'E-Mail',
    link: 'mailto:contato@thomazot.com.br',
    icon: {
      url: 'https://www.datocms-assets.com/65627/1673139486-email.svg'
    }
  }
]

export const QuerySocialMock = [
  {
    request: {
      query: SOCIAL
    },
    result: {
      data: {
        socials: SocialMock
      }
    }
  }
]
