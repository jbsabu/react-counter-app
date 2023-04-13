export default function Footer(){
 
  const gitURL = "https://github.com/jsabu/react-counter-app"
  return(
<footer>
  <p><small>&copy; 2023</small>
  <br />
  <a href={gitURL} target="_blank" rel = "noreferrer">See code in Github</a>
  </p>
</footer>
  )
}