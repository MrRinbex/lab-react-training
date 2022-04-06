import React from 'react'
const salutation = (props) =>{
  if (props === 'en') {
    return `${'Hello'}`;
  } else if (props === 'fr') {
    return `${'Bonjour'}`;
  } else if (props === 'de') {
    return `${'Hallo'}`;
  } else {
    return `${'Hola'}`;
  }

}
const Greetings = ({lang, children}) => {
  return (
    <p>
      {salutation(lang)}
      {children}
    </p>
  )
}

export default Greetings