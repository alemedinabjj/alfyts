
import { FaFacebook, FaGithub, FaInstagram, FaInternetExplorer, FaLinkedin, FaPinterest, FaTwitch, FaTwitter } from 'react-icons/fa'
import { Container, LinkDiv } from './style'

const data = [
  {
    id: 1,
    icon: <FaGithub size={30} />,
    social: 'github',
    tag: '@alemedinabjj',
    color: '#333',
    link: 'gttps://github.com/alemedinabjj',
  },
  {
    id: 2,
    icon: <FaFacebook size={30} />,
    social: 'facebook',
    tag: 'Alexandre Medina',
    color: '#3b5998',
    link: 'https://www.facebook.com/alexandrem.medina.9',
  },
  {
    id: 3,
    icon: <FaLinkedin size={30} />,
    social: 'Linkedin',
    tag: 'Alexandre Medina',
    color: '#0077B5',
    link: 'https://www.linkedin.com/in/alexandre-medina-bjj/',
  },
  {
    id: 4,
    icon: <FaInstagram size={30} />,
    social: 'instagram',
    tag: '@alemedinabjj',
    color: 'linear-gradient(35deg, rgba(255,153,0,1) 0%, rgba(211,61,205,1) 63%, rgba(82,0,255,1) 100%)',
    link: 'https://www.instagram.com/alemedinabjj/',
  },
  {
    id: 5,
    icon: <FaTwitch size={30} />,
    social: 'Twitch',
    tag: 'infamous',
    color: '#6441A5',
    link: 'https://www.twitch.tv/infamous',
  },
  {
    id: 6,
    icon: <FaPinterest size={30} />,
    social: "Pinterest",
    tag: '@alemedinabjj',
    color: '#BD081C',
    link: 'https://www.pinterest.com/alemedinabjj/',
  },
  {
    id: 7,
    icon: <FaTwitter  size={30} />,
    social: 'Twitter',
    tag: '@alemedinabjj',
    color: '#1DA1F2',
    link: 'https://twitter.com/alemedinabjj',
  },
  {
    id: 8,
    icon: <FaInternetExplorer size={30} />,
    social: 'website',
    tag: 'alexandremedina.me',
    color: '#000',
    link: 'https://alexandremedina.me',
  }
]

export default function Cards() {

  return (
    <Container>

      {data.map(({id, icon, social, tag, color, link}) => {
        return (
          <LinkDiv
           href={link} 
           target="_blank" 
           key={id} 
           color={color}
           onMouseOver={() => console.log(color)}
           >
            {icon}
          <p>{social}</p>
          <small>{tag}</small>
      </LinkDiv>
        )
      })}
    </Container>
   
  )
} 

// pegar a cor do background do card, e colocar na borda da foto 